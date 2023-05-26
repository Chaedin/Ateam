import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Aside = () => {
    return (
        <aside id="aside">
            <ul>
                <li>
                    <div className="bubble">장바구니</div>
                    <button className="aside_btn">
                        <a href="./subPage/cart/cart.html">
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </a>
                    </button>
                </li>
                <li>
                    <div className="bubble">즐겨찾기</div>
                    <button className="aside_btn">
                        <a href="">
                            <FontAwesomeIcon icon={farHeart} />
                        </a>
                    </button>
                </li>
                <li>
                    <div className="bubble">로그인</div>
                    <button className="aside_btn">
                        <Link to='/login'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="aside_btn up">
                        <span>Top</span>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
