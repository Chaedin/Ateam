package com.example.perfume01.controller;

import com.example.perfume01.dao.MemberDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@Controller
@RestController("/rest")
public class OrdersController {
    

    @GetMapping("/buy")
    public String buy(HttpSession session) {
        // 세션에서 맴버 아이디 가져와서 저장, 포인트도 생각
        String memberId = (String) session.getAttribute("member_id");
        
        return "/buy";
    }

}
