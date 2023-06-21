import React, { useEffect } from 'react';
import style from '../mypage/mypage.module.css';
import useMyprofile from '../mypage/mypage_hooks';
import axios from 'axios';

export default function MypageProfile() {
    const { myprofile, loading, error } = useMyprofile();



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <div className={style.profile}>
                {myprofile.map((member) =>
                    <ul className={style.member_info}>
                        <li>{member.member_name} 님</li>
                        <li>
                            {member.member_role}
                        </li>
                        <li className={style.layoutCoupon}>
                            보유 포인트 : {member.member_point}
                        </li>
                        <li>
                            전화번호 : {member.member_phone}
                        </li>
                        <li>
                            이메일 : {member.member_email}
                        </li>
                        <li>
                            <span>회원 정보 수정</span>
                        </li>
                    </ul>
                )}

            </div>
        </>
    )
}
