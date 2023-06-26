package com.example.perfume01.dao;

import com.example.perfume01.criteria.SearchCriteria;
import com.example.perfume01.vo.MemberVO;
import mapperInterface.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Member;
import java.util.List;

@Repository
public class MemberDAOImpl implements MemberDAO {

    @Autowired
    MemberMapper mapper;
    @Override
    public List<MemberVO> selectList() {
        return mapper.selectList();
    }

    @Override
    public MemberVO selectOne(MemberVO vo) {
        return mapper.selectOne(vo);
    }

    @Override
    public MemberVO selectUser(String loginID) {
        return mapper.selectUser(loginID);
    }

    @Override
    public MemberVO myinfo(String member_id) {
        return mapper.myinfo(member_id);
    }

    @Override
    public int changeInfo(MemberVO vo) {
        return mapper.changeInfo(vo);
    }


    @Override
    public int minsert(MemberVO vo) {
        return mapper.minsert(vo);
    }

    @Override
    public int mupdate(MemberVO vo) {
        return mapper.mupdate(vo);
    }

    @Override
    public int mdelete(MemberVO vo) {
        return mapper.mdelete(vo);
    }


    @Override
    public List<MemberVO> searchMember(String column, String keyword, int begin, int end) {
        return mapper.searchMember(column, keyword, begin, end);
    }


    // === 맴버 검색 항목 ===
    @Override
    public List<MemberVO> searchList(SearchCriteria criteria) {
        return mapper.searchList(criteria);
    }

    @Override
    public int searchTotalCount(SearchCriteria criteria) {
        return mapper.searchTotalCount(criteria);
    }


}
