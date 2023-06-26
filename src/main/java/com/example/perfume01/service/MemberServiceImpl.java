package com.example.perfume01.service;

import com.example.perfume01.criteria.SearchCriteria;
import com.example.perfume01.dao.MemberDAO;
import com.example.perfume01.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberDAO dao;
    @Override
    public List<MemberVO> selectList() {
        return dao.selectList();
    }

    @Override
    public MemberVO selectOne(MemberVO vo) {
        return dao.selectOne(vo);
    }

    @Override
    public MemberVO selectUser(String loginID) {
        return dao.selectUser(loginID);
    }

    @Override
    public MemberVO myinfo(String member_id) {
        return dao.myinfo(member_id);
    }

    @Override
    public int changeInfo(MemberVO vo) {
        return dao.changeInfo(vo);
    }


    @Override
    public int minsert(MemberVO vo) {
        return dao.minsert(vo);
    }


    @Override
    public int mupdate(MemberVO vo) {
        return dao.mupdate(vo);
    }

    @Override
    public int mdelete(MemberVO vo) {
        return dao.mdelete(vo);
    }

    @Override
    public List<MemberVO> searchList(SearchCriteria criteria) {
        return dao.searchList(criteria);
    }

    @Override
    public int searchTotalCount(SearchCriteria criteria) {
        return dao.searchTotalCount(criteria);
    }


}
