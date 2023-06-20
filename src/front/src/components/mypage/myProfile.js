import React, { useEffect } from 'react';
import style from '../mypage/mypage.module.css';
import useMyprofile from './mypage_hooks';
import axios from 'axios';

export default function MypageProfile() {
    const { myprofile, loading, error } = useMyprofile();

    useEffect(() => {
        axios.get('http://localhost:8080/mypage/profile')
            .then(response => {
                setMyprofile(response.data.myprofile);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <div className={style.profile}>
                <div className={style.profile_img}></div>
                <ul className={style.member_info}>
                    <li>백채린 님</li>
                    <li className={style.layoutCoupon}>
                        보유 포인트 :{' '}
                    </li>
                    <li>
                        <span>회원 정보 수정</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
