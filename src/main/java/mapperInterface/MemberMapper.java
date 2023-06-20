package mapperInterface;

import com.example.perfume01.criteria.SearchCriteria;
import com.example.perfume01.vo.MemberVO;

import java.util.List;

public interface MemberMapper {
    // 단순 맴버 리스트 출력 테스트
    List<MemberVO> selectList();

    // 회원가입 임시
    int minsert(MemberVO vo);

    // 회원정보 수정
    int mupdate(MemberVO vo);

    int mdelete(MemberVO vo);

    MemberVO selectOne(MemberVO vo);


    // === 회원 검색 항목 ===
    List<MemberVO> searchMember(String member_id, String keyword, int begin, int end);

    List<MemberVO> searchList(SearchCriteria criteria);
    int searchTotalCount(SearchCriteria criteria);

}
