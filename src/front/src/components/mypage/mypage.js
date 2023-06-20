import React from 'react';
import Mypageitem from '../mypage/mypageitem';
import Topimg from '../topimg/topimg';
import style from '../mypage/mypage.module.css';

const Mypage = () => {

    return (
        <>
            <Topimg />

            <section>
                <div className={style.myPage_container}>
                    <h1 className={style.myPageText}>My Page</h1>
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
                    <hr />
                    <div className={style.order_check_all}>
                        <div className={style.order}>
                            <h2>주문내역</h2>
                            <table>
                                <tr className={style.order_info}>
                                    <th></th>
                                    <th>상품 이름</th>
                                    <th>상품 가격</th>
                                    <th>배송 정보</th>
                                </tr>
                                {/* 나중에 임포트후 맵돌리면 아이템수만큼 테이블 생성 */}
                                <Mypageitem></Mypageitem>
                                <Mypageitem></Mypageitem>
                                <Mypageitem></Mypageitem>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mypage;
