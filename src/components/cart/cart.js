import React from 'react';
import styles from './cart.module.css';

const Cart = () => {
    return (
        <div className={styles.cart_allcontainer}>
            <div>
                <table className={styles.cart_table}>
                    <thead className={styles.cart_table_thead}>
                        <tr>
                            <th>상품목록</th>
                            <th>향 분류</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>상품체크</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* db에서 데이터 넘어오면 tr,td 동적으로 생성 */}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>
                                <button>선택상품 삭제</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className={styles.cart_bottomcontainer}>
                <div className={styles.cart_bottomleft_container}>
                    <div className={styles.cart_box}>포인트 입력</div>
                    <p>사용하실 포인트를 입력해 주세요</p>
                    <div>
                        {/* input type추후에 수정해주세요 */}
                        <label>
                            <input type="text" placeholder="포인트" />{' '}
                            <button className={styles.cart_input_button}>포인트 적용</button>
                        </label>
                    </div>
                    <div className={styles.cart_box}>판매자에게 문의</div>
                    <p>상품관련으로 문의하실 사항이 있으시면 아래 박스에 내용을 작성해주세요</p>
                    <textarea className={styles.cart_bottom_textarea}></textarea>
                </div>
                <div className={styles.cart_bottomrightcontainer}>
                    <div className={styles.cart_box}>주문 내역</div>
                    <div>
                        <p>배송비 및 추가 비용은 입력된 값을 기준으로 계산됩니다</p>
                        <ul>
                            <li className={styles.cart_bottomright_price}>
                                <strong>상품가격</strong>
                                <strong>원</strong>
                            </li>

                            <li className={styles.cart_bottomright_delivery}>
                                <strong>배송비</strong>
                                <strong>원</strong>
                            </li>

                            <li className={styles.cart_bottomright_totalprice}>
                                <strong>합계</strong>
                                <strong>원</strong>
                            </li>
                        </ul>
                        <button className={styles.cart_payment}>결제 진행</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
