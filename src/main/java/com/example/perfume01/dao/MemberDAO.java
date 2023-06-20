package com.example.perfume01.dao;

import com.example.perfume01.criteria.SearchCriteria;
import com.example.perfume01.vo.MemberVO;

import java.util.List;

public interface MemberDAO {

    List<MemberVO> selectList();

    MemberVO selectOne(MemberVO vo);

    int minsert(MemberVO vo);

    int mupdate(MemberVO vo);

    int mdelete(MemberVO vo);


    // === 맴버 검색 항목 ===
    List<MemberVO> searchMember(String column, String keyword, int begin, int end);

    List<MemberVO> searchList(SearchCriteria criteria);
    int searchTotalCount(SearchCriteria criteria);
}
