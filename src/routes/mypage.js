import React, { useState } from 'react';
import mainimg1 from '../image/temp_main_img_tonedown.jpg';
import Mypageitem from '../elements/mypageitem';
import ModalBasic from "../elements/modalbasic";
import Topimg from '../elements/topimg';

const Mypage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <Topimg />

            <section>
                <div className="myPage_container">
                    <h1 className="myPageText">My Page</h1>
                    <div className="profile">
                        <div className="profile_img"></div>
                        <ul className="member_info">
                            <li>백채린 님</li>
                            <li>
                                보유 쿠폰 :{' '}
                                <div>
                                    <span className="coupon" onClick={showModal}>
                                        2</span>개
                                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                                </div>
                                {modalOpen && (
                                    <div className="popup">
                                        <div className="popup-content">
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>
                                <span>회원 정보 수정</span>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="order_check_all">
                        <div className="order">
                            <h2>주문내역</h2>
                            <table>
                                <tr className="order_info">
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
