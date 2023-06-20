import React, { useState } from "react";
import Modal from '../modal/modal';
import style from './iteminfo.module.css';

const Iteminfo = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <form>
                <div className={style.iteminfo_wrapper}>
                    <div className={style.iteminfo_imgbox}>
                        <div className={style.product_mainimg}></div>
                        <div className={style.product_subimgbox}>
                            <div></div>
                            <div></div>
                            <div></div>
                            {/* 서브이미지 갯수대로 map돌리기 */}
                        </div>
                    </div>
                    <div className={style.iteminfo_textbox}>
                        <div className={style.product_name}></div>
                        <div className={style.product_price}></div>
                        <div className={style.product_content}></div>
                        <div className={style.product_delivery_price}></div>
                        <div className={style.stock_and_button}>
                            <input id="product_Stock" type="number" min="1" value="1" />
                            <button className={style.iteminfo_cart}>장바구니</button>
                            <button className={style.iteminfo_buy}>구매</button>
                        </div>
                    </div>
                </div>
            </form>

            <img src={require('../../image/iteminfo_bigmimg.jpg')} alt="" style={{ width: '1100px', margin: '0 auto' }} />

            <div className={style.qnacontainer1} id="qna">
                <div className={style.qnachild_wrapper}>
                    <div className={style.qnachild1}>
                        <b>상품 Q&A</b>
                        <p>
                            -상품에 대해 궁금한 점을 남겨주세요.<br />
                            -문의 답변은 마이페이지상품Q&A에서 확인하실 수 있습니다.<br />
                        </p>
                    </div>
                    <button onClick={openModal} className={style.qnachild2}>문의하기</button>
                    <Modal open={modalOpen} close={closeModal} header="Modal heading" />
                </div>
                <table className={style.qnatable}>
                    <tr>
                        <th></th>
                        <th colspan="">문의/답변</th>
                        <th></th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    <tr>
                        <td colspan="5">등록된 Q&A가 없습니다</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Iteminfo;
