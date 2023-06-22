package com.example.perfume01.controller;

import java.util.List;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.perfume01.service.MemberService;
import com.example.perfume01.vo.MemberVO;

@Controller @RequestMapping("/mypage")
public class MyPageController {

	MemberService service;
	
	
	
    @GetMapping("/myinfo")
    public List<MemberVO> myPage() {
    	List<MemberVO> rtn = service.selectList();
    	return rtn;
    }

}
