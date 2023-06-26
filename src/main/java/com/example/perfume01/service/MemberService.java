package com.example.perfume01.service;

import com.example.perfume01.criteria.SearchCriteria;
import com.example.perfume01.vo.MemberVO;

import java.lang.reflect.Member;
import java.util.List;

public interface MemberService {
    List<MemberVO> selectList();

    MemberVO selectOne(MemberVO vo);

    MemberVO selectUser(String loginID);

    MemberVO myinfo(String member_id);

    int changeInfo(MemberVO vo);

    int minsert(MemberVO vo);

    int mupdate(MemberVO vo);

//    int mdelete(MemberVO vo);
    int mdelete(MemberVO vo);


    // === 맴버 검색 항목 ===
    List<MemberVO> searchList(SearchCriteria criteria);
    int searchTotalCount(SearchCriteria criteria);
}
