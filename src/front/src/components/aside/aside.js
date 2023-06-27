import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import style from '../aside/aside.module.css';
import axios from "axios";

// ========== 쿠키 관련 코드 ========== start
// 쿠키 저장
const getCookie = (name) => {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
};

// 쿠키 가져오기
const setCookie = (name, value, expDays = 1) => {
    const date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
};
// 쿠키 삭제
const deleteCookie = (name) => {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
};
// ========== 쿠키 관련 코드 ========== end


const Aside = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const navigate = useNavigate();


    // useEffect(() => {
    //     // 세션 ID를 로컬 스토리지에서 가져옴
    //     const sessionID = getCookie('JSESSIONID');
    //
    //     // 세션 ID가 있는 경우에만 요청을 보냄
    //     if (sessionID) {
    //         axios.post('http://localhost:8080/member/login', {}, {
    //             headers: {
    //                 'X-Requested-With': 'XMLHttpRequest', // CORS 요청을 위한 헤더 추가
    //                 'Content-Type': 'application/json', // 요청 컨텐츠 타입
    //                 'Cookie': `JSESSIONID=${sessionID}` // 세션 ID를 쿠키로 포함시킴
    //             }
    //         })
    //             .then(response => {
    //                 console.log(response.data); // 데이터 콘솔 출력
    //                 setIsLoggedIn(true);
    //             })
    //             .catch(error => {
    //                 console.error('로그인 상태 확인에 실패하였습니다.', error);
    //             });
    //     }
    // }, []);

    const handleLogout = ()=>{
            // 세션 ID를 로컬 스토리지에서 삭제
            deleteCookie('JSESSIONID');

            // 로그아웃 요청
            axios.get('http://localhost:8080/member/logout', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest', // CORS 요청을 위한 헤더 추가
                    'Content-Type': 'application/json' // 요청 컨텐츠 타입
                },
            }).then(response => {
                    setIsLoggedIn(false);
                    sessionStorage.removeItem('loginID');
                    sessionStorage.removeItem('loginName');
                    alert('로그아웃에 성공하였습니다.');
                    navigate('/');
                }).catch(error => {
                    console.error('로그아웃에 실패하였습니다.', error);
                });

    };

    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }

    return (
        <aside id={style.aside}>
            <ul>
                <li>
                    <div className={style.bubble}>장바구니</div>
                    <button className={style.aside_btn}>
                        <Link to='/cart'>
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </Link>
                    </button>
                </li>
                <li>
                    <div className={style.bubble}>즐겨찾기</div>
                    <button className={style.aside_btn}>
                        <a href="">
                            <FontAwesomeIcon icon={farHeart} />
                        </a>
                    </button>
                </li>
                <li>
                    {isLoggedIn ? (
                        <>
                            <div className={style.bubble}>로그아웃</div>
                            <button onClick={handleLogout} className={style.aside_btn}>
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                        </>
                    ) : (
                        <>
                            <div className={style.bubble}>로그인</div>
                            <button className={style.aside_btn}>
                                <Link to="/login">
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </button>
                        </>
                    )}
                </li>
                <li>
                    <button onClick={scrollToTop} className={`${style.aside_btn} ${style.up}`}>
                        <span>Top</span>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
