import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import style from '../aside/aside.module.css';

const Aside = () => {

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
                        <a href="./subPage/cart/cart.html">
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </a>
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
                    <div className={style.bubble}>로그인</div>
                    <button className={style.aside_btn}>
                        <Link to='/login'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </button>
                </li>
                <li>
                    <button className={`${style.aside_btn} ${style.up}`} onClick={scrollToTop}>
                        <span>Top</span>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
