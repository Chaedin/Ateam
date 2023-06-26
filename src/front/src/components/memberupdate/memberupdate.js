import React from 'react';
import style from '../memberupdate/memberupdate.css';

const MemberUpdate = () => {

    function Data() {
        if (test="${empty requestScope.mlist}") {
            <p>mlist에서 데이터를 받아오지 못하고 있습니다.</p>
        } else if (test="${not empty requestScope.mlist}") {
            <>
                <p>mlist에서 데이터를 받아오고 있습니다.</p>
                <p>받아오고 있는 멤버 아이디 : {`${requestScope.mlist.member_id}`}</p>
                <p>mlist 다 출력 : {`${requestScope.mlist}`}</p>
            </>
        }
    }

    function Role() {
        var user = "admin";

        switch (user) {
            case "admin":
                return ( 
                    <>
                    {/* <select name="member_role" className={style.role_admin}>
                    <option selected>일반회원</option>
                    <option>관리자</option>
                    </select> */}
                    (현재 등급 : {`${requestScope.mlist.member_role}`})
                    </>
                )
                
            case "customer" :
                return (
                    <>
                    {/* <select name="member_role" className={style.role_customer}>
                        <option>관리자</option>
                        <option selected>일반회원</option>
                    </select> */}
                    (현재 등급 : {`${requestScope.mlist.member_role}`})
                    </>
                )
        }
    }

    return (
        <>
            <form action="memberUpdate" method="Post" className={style.edit_member}>
                <input type="hidden" name="member_id" value={`${requestScope.mlist.member_id}`} />
                <div className={style.container_600}>
                    <h1>회원 정보 변경</h1>
                    <Data />
                </div>

                <div className={style.row}>
                    <label>닉네임</label>
                    <input type="text" name="member_nick" className={style.nick} value={`${requestScope.mlist.member_id}`} />
                    <div className={valid_message}>사용 가능한 닉네임입니다</div>
                    <div className={invalid_message}>닉네임은 한글 또는 숫자 2~10자로 작성하세요</div>
                    <div className={invalid_message2}>이미 사용중인 닉네임입니다</div>
                </div>

                <div className={style.row}>
                    <label>전화번호</label>
                    <input type="tel" name="member_phone" className={style.tel} value={`${requestScope.mlist.member_id}`} />
                    <div className={valid_message}>사용 가능한 전화번호입니다</div>
                    <div className={invalid_message}>올바른 전화번호가 아닙니다</div>
                </div>

                <div className={style.row}>
                    <label>이메일</label>
                    <input type="email" name="member_email" className={style.tel} value={`${requestScope.mlist.member_id}`} />
                    <div className={valid_message}>사용 가능한 이메일 입니다</div>
                    <div className={invalid_message}>올바른 이메일 형식을 입력해주세요</div>
                    <div className={invalid_message2}>이미 사용중인 이메일입니다</div>
                </div>

                <div className={style.row}>
                    <label>주소</label>
                    <input type="text" name="member_post" className={style.post} placeholder="우편번호" readonly value={`${requestScope.mlist.member_post}`} />
                    <button type="button" className={style.post_btn}>검색</button>
                </div>
                <div class="row">
                    <input type="text" name="member_basic_addr" className={style.basic_post} placeholder="기본주소" readonly value={`${requestScope.mlist.member_basic_addr}`} />
                </div>
                <div class="row">
                    <input type="text" name="member_detail_addr" required className={style.detail_post} placeholder="상세주소" value={`${requestScope.mlist.member_detail_addr}`} />
                        <div className={invalid_message}>주소를 작성해주세요</div>
                </div>

                <div className={style.row}>
                    <label className={style.form_label}>회원등급</label>
                    <Role/>
                </div>

                <div className={style.row}>
                    <label className={style.form_label}>포인트</label>
                    <input type="text" name="member_point" value={`${requestScope.mlist.member_point}`} required className={style.point} />
                    (현재 포인트 : {`${requestScope.mlist.member_point}`} point)
                </div>

                <div className={style.btn}>
                    <a herf={`${pageContext.request.contextPath}/admin/member/memberList`} className={style.btn_detail}>목록</a>
                    <input type="submit" id="saveBtn" className={save_btn} value="변경" />
                </div>
            </form>
        </>
    )
}