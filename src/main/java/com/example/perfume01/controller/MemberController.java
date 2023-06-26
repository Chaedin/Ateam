package com.example.perfume01.controller;

        import com.example.perfume01.criteria.PageMaker;
        import com.example.perfume01.criteria.SearchCriteria;
        import com.example.perfume01.dao.MemberDAO;
        import com.example.perfume01.dto.ResponseDTO;
        import com.example.perfume01.service.MemberService;
        import com.example.perfume01.vo.MemberVO;
        import lombok.AllArgsConstructor;
        import lombok.NoArgsConstructor;
        import lombok.extern.log4j.Log4j2;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.security.authentication.AuthenticationManager;
        import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
        import org.springframework.security.core.Authentication;
        import org.springframework.security.core.context.SecurityContextHolder;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
        import org.springframework.ui.Model;
        import org.springframework.web.bind.annotation.*;
        import org.springframework.web.servlet.mvc.support.RedirectAttributes;

        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpSession;
        import java.util.List;
        import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/member")
@Log4j2
@AllArgsConstructor @NoArgsConstructor
public class MemberController {

    MemberVO vo;

    @Autowired
    MemberService service;

    @Autowired
    MemberDAO dao;

    @Autowired
    PasswordEncoder passwordEncoder;

    AuthenticationManager authenticationManager;

    @PostMapping("/loginRest")
    public String login(HttpServletRequest request, Model model) {
        String pw = vo.getMember_pw();
        String uri = "redirect:/home";

        vo = service.selectOne(vo);
        if (vo != null) {
            if (pw.equals(vo.getMember_pw())) { // 비밀번호 직접 비교
                request.getSession().setAttribute("loginID", vo.getMember_id());
                request.getSession().setAttribute("loginName", vo.getMember_name());
            } else {
                model.addAttribute("msg", "패스워드 오류");
                uri = "/member/mLoginForm";
            }
        } else {
            model.addAttribute("msg", "아이디 오류");
            uri = "/member/mLoginForm";
        }
        return uri;
    }

    @GetMapping("/logoutRest")
    public String logout(HttpServletRequest request, HttpSession session) {
        System.out.println("로그아웃");
        session.invalidate();
        return "redirect:/home";
    }


    @GetMapping("/memberListRest")
    public List<MemberVO> memberList(SearchCriteria criteria, PageMaker pageMaker) {
        //criteria.setSnoEno();

        if (criteria.getSearchType() != null && criteria.getSearchType().length() < 1) {
            criteria.setSearchType(null);
        }

        List<MemberVO> rtn;
//        List<MemberVO> rtn2;

        // 에러처리 해야됨
//        rtn2 = service.selectList();
        rtn = service.searchList(criteria);

        return rtn;
    }


    @GetMapping("/memberDetailRest")
    public String memberDetail(HttpServletRequest request, Model model, MemberVO vo) {
        // id확인 로직은 나중에 구현

        if (vo.getMember_id() == null || vo.getMember_id().length() < 1) {
            vo.setMember_id((String) request.getSession().getAttribute("loginID"));
        }

        String uri = "/member/memberDetail";

        // service 처리
        model.addAttribute("mlist", service.selectOne(vo));
        if ("U".equals(request.getParameter("jCode"))) {
            uri = "/member/memberUpdate";
        }
        return uri;
    }



    @PostMapping("/memberUpdateRest")
    public String mupdate(HttpServletRequest request, Model model,MemberVO vo) throws Exception {
        model.addAttribute("mlist", vo);
        String uri = "/member/memberDetail";

        vo.setMember_pw(null);

        //회원 정보 업데이트
        service.mupdate(vo);
        return uri;
    }


    @GetMapping("/listRest")
    public String memberList(Model model, @RequestParam(name = "column", defaultValue = "member_id") String column,
                             @RequestParam(name = "keyword", defaultValue = "") String keyword,
                             @RequestParam(name = "begin", defaultValue = "1") int begin,
                             @RequestParam(name = "end", defaultValue = "10") int end) {

        List<MemberVO> members = dao.searchMember(column, keyword, begin, end);
        model.addAttribute("members", members);

        return "/member/memberList";
    }

    // ====== 검색 관련 컨트롤러 ======


    @GetMapping("/mdeleteRest")
    public String mdelete(HttpServletRequest request, MemberVO vo, RedirectAttributes rttr) {
        // 로그인 한 유저가 탈퇴되게 하는 코드
        // vo.setMember_id((String) request.getSession().getAttribute("loginID"));

        // vo에서 클릭한 member_id를 가져오게 하는 코드
        // 대신 프론트에서 member_id를 쏴줄 필요성이 있음
        vo.setMember_id(vo.getMember_id());
        String uri = "redirect:memberList";
        if (service.mdelete(vo) > 0) {
            request.getSession().invalidate();
            rttr.addFlashAttribute("msg", "회원 삭제에 성공하였습니다.");
        } else {
            rttr.addFlashAttribute("msg", "회원 삭제에 실패하였습니다.");
        }
        return uri;
    }

    //회원 가입
    @PostMapping("/reg_user")
    public ResponseDTO regUser(MemberVO memberVO){
        ResponseDTO rtn = new ResponseDTO();

        System.out.println("회원가입 테스트중 에러확인1");


        try {
            log.info(rtn);

            System.out.println("회원가입 테스트중 에러확인2");

            memberVO.setMember_pw(passwordEncoder.encode(memberVO.getMember_pw()));

            System.out.println("회원가입 테스트중 에러확인3");


            int result = service.minsert(memberVO);

            System.out.println("회원가입 테스트중 에러확인4");


            if (result == 1) {
                rtn.setErr_code(1);
                rtn.setMsg("정상등록");
            } else {
                rtn.setErr_code(0);
            }

        } catch (Exception e){
            rtn.setErr_code(0);
            rtn.setMsg("500!!!!");
            e.printStackTrace();
        }
        return rtn;
    }

    // 일반 로그인(암호화)
    @PostMapping("/login")
    public String memberlogin(HttpSession session, @RequestBody MemberVO memberVO) {

        String pw = memberVO.getMember_pw();
        String uri = "/";

        memberVO = service.selectOne(memberVO);
        if (memberVO != null) {
            if (passwordEncoder.matches(pw,memberVO.getMember_pw())) {
                session.setAttribute("loginID", memberVO.getMember_id());
                session.setAttribute("loginName",memberVO.getMember_name());
            } else {
                uri = "member/login";
            }
        } else {
            uri = "member/login";
        }
        return uri;
    }

}
