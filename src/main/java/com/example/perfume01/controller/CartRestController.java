package com.example.perfume01.controller;

import com.example.perfume01.dao.CartDAO;
import com.example.perfume01.dao.CartProductInfoDAO;
import com.example.perfume01.dao.ProductDAO;
import com.example.perfume01.dto.CartDTO;
import com.example.perfume01.dto.CartProductInfoDTO;
import com.example.perfume01.dto.ProductDTO;
import com.example.perfume01.service.CartProductInfoService;
import com.example.perfume01.service.CartService;
import com.example.perfume01.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin(origins = {"http://127.0.0.1:3030"})
@RestController @Log4j2
@RequestMapping("/cart")
@AllArgsConstructor
@NoArgsConstructor
public class CartRestController {

    CartService service;

    ProductService productService;

    CartProductInfoService infoService;

    CartDAO cartDAO;

    CartProductInfoDAO infoDAO;

    ProductDAO productDAO;

    CartProductInfoDTO infoDTO;


    @GetMapping("/list")
    public List<CartDTO> cartList() {
        List<CartDTO> rtn = service.cartList();
        return rtn;
    }

    // 장바구니 페이지 (list)
    @GetMapping("/main")
    public ResponseEntity<Map<String, Object>> mainList(HttpSession session) {
        String member_id = (String) session.getAttribute("member_id");
        infoDTO.setMember_id(member_id);
        List<CartProductInfoDTO> itemInfo = infoService.cartInfoList(member_id);
        int cartCnt = service.cartCnt(member_id);
        int isEmpty = itemInfo.size();

        Map<String, Object> response = new HashMap<>();
        response.put("itemInfo", itemInfo);
        response.put("cartCnt", cartCnt);
        response.put("isEmpty", isEmpty);

        return ResponseEntity.ok(response);
    }


    // 장바구니에 상품 담기
    @PostMapping("/insert")
    public ResponseEntity<String> insert(
            @RequestBody CartDTO cartDTO, HttpSession session,
            ProductDTO productDTO
    ) {
        String member_id = (String) session.getAttribute("member_id");
        cartDTO.setMember_id(member_id);
        int product_count = cartDTO.getProduct_count();
        int product_stock = productService.selectStock(cartDTO.getProduct_no());

        // 장바구니에 없는 상품인지 아닌지 체크
        boolean isNew = service.selectOne(cartDTO) == null;

        // error 1,2,3 페이지를 만들어야 할 필요성이 있음. 없으면 그냥 메세지로 처리
        if (product_count <= product_stock && isNew && product_count <= 10) {
            service.cartInsert(cartDTO);
            return ResponseEntity.ok("success");
        } else if (product_count > 10) {
            return ResponseEntity.badRequest().body("error3");
        } else if (!isNew) {
            return ResponseEntity.badRequest().body("error1");
        } else {
            return ResponseEntity.badRequest().body("error2");
        }
    }


    // 장바구니에서 상품 삭제
    @GetMapping("/delete")
    public ResponseEntity<String> delete(HttpSession session,
                         @RequestParam int product_no,
                         @ModelAttribute CartDTO cartDTO) {
        String member_id = (String) session.getAttribute("member_id");
        cartDTO.setMember_id(member_id);
        cartDTO.setProduct_no(product_no);
        service.cartDeleteItem(cartDTO);
        return ResponseEntity.ok("장바구니에사 상품을 삭제하였습니다.");
    }

    // 장바구니 상품 수량 변경
    @PostMapping("/update")
    public ResponseEntity<String> update(HttpSession session,
                                         @ModelAttribute CartDTO cartDTO,
                                         RedirectAttributes attr) {
        String member_id = (String) session.getAttribute("member_id");
        cartDTO.setMember_id(member_id);
        // 담으려는 수량
        int productCount = cartDTO.getProduct_count();

        // 재고수량
        ProductDTO productDTO = new ProductDTO();
        
        // 1번버전. 안될거 같으니 비교해보면서 테스트
//        int productStock = productDTO.getProduct_stock();
        // 2번버전. 이것도 될지 안될지 모름
        int productStock = productService.selectStock(cartDTO.getProduct_no());

        // 담으려는 수량이 재고보다 적거나 같으면 장바구니 추가
        // 아마 고쳐야할 확률이 매우 높음
        if (productCount <= productStock) {
            service.cartChangeCount(productCount, productStock, member_id);
        } else {
            attr.addFlashAttribute("mode", "error");
        }
        return ResponseEntity.ok("수량이 변경되었습니다.");
    }




    // 사용자의 아이디에 따른 상품 정보를 표시해 줘야함
    // 테이블을 조인하여 xml에 sql문을 하나 만들어서 CartProductInfo 관련 항목들을
    // 작성해 줘야 할 필요성이 있다.
    // 리소스의 일부분을 업데이트해야하는 경우 Patch요청을 사용한다.
    @PatchMapping("/")
    public List<CartProductInfoDTO> changeProductQty(HttpSession session, CartDTO dto) {
        String member_id = (String) session.getAttribute("member_id");
        dto.setMember_id(member_id);

        int product_count, product_no;
        product_count = dto.getProduct_count();
        product_no = dto.getProduct_no();

        service.cartChangeCount(product_count, product_no, member_id);

        return infoService.cartInfoList(member_id);
    }


}
