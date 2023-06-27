import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import styles from './cart.module.css';
import axios from "axios";
import Orders from "../orders/orders";

import * as events from "events";
import {render} from "@testing-library/react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(1);
    const [isEmpty, setIsEmpty] = useState(0);
    const [member_id, setMember_id] = useState();
    const [memberInfo, setMemberInfo] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const member_id = sessionStorage.getItem('loginID');
        //장바구니 정보 요청
        axios.get(`http://localhost:8080/cart/main?member_id=${member_id}`)
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.log("장바구니 정보 요청 에러");
            });
    }, []);

    // 포인트 조회를 위한 맴버조회
    useEffect(()=>{
        const member_id = sessionStorage.getItem('loginID');
        //장바구니 정보 요청
        axios.get(`http://localhost:8080/member/userinfo?member_id=${member_id}`)
            .then(response => {
                setMemberInfo(response.data);
            })
            .catch(error => {
                console.log("장바구니 정보 요청 에러");
            });
    }, []);

    // 총 상품 가격
    useEffect(() => {
        // 상품 가격 총합 계산
        const total = cartItems.reduce((acc, item) => acc + item.product_price * item.product_count, 0);
        setTotalPrice(total);
    }, [cartItems]);

    const handleQtyChange = (event, index) => {
        const {value} = event.target;

        setCartItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index].product_count = parseInt(value);
            return updatedItems;
        })
    }

    const handleDelete = (product_no) => {
        // 상품 삭제 API 요청
        axios.delete(`http://localhost:8080/cart/delete?product_no=${product_no}`)
            .then(response => {
                // 삭제 성공 후, 장바구니 다시 가져오기
                const member_id = sessionStorage.getItem('loginID');
                axios.get(`http://localhost:8080/cart/main?member_id=${member_id}`)
                    .then(response => {
                        setCartItems(response.data);
                    })
                    .catch(error => {
                        console.log("장바구니 정보 요청 에러");
                    });
            })
            .catch(error => {
                console.log("상품 삭제 에러");
            });
    };

    const handleBulkDelete = () => {
        // 체크된 상품들의 product_no 배열 생성
        const selectedProducts = cartItems.filter(item => item.checked === true);
        const productNos = selectedProducts.map(item => item.product_no);

        // 상품 일괄 삭제 API 요청
        axios.post('http://localhost:8080/cart/bulk-delete', productNos)
            .then(response => {
                // 삭제 성공 후, 장바구니 다시 가져오기
                const member_id = sessionStorage.getItem('loginID');
                axios.get(`http://localhost:8080/cart/main?member_id=${member_id}`)
                    .then(response => {
                        setCartItems(response.data);
                    })
                    .catch(error => {
                        console.log("장바구니 정보 요청 에러");
                    });
            })
            .catch(error => {
                console.log("상품 일괄 삭제 에러");
            });
    };

    const handleApplyPoints = () => {
        // 포인트 적용 API 요청
        // ...
    };

    const handleCheckout = () => {
        // 결제 진행 로직 (우선 단순 페이지 이동)
    };


    return (
        <div className={styles.cart_allcontainer}>
            <div>
                <table className={styles.cart_table}>
                    <thead className={styles.cart_table_thead}>
                        <tr>
                            <th>상품목록</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>상품체크</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            /* db에서 데이터 넘어오면 tr,td 동적으로 생성 */
                            cartItems.map(item => (
                                <tr key={item.product_no}>
                                    <td>
                                        {item.product_name}
                                        <img src={`http://localhost:8080/${item.product_mainimg}`}/>
                                    </td>
                                    <td>{item.product_tagno}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            max="10"
                                            value={item.product_count}
                                        />
                                    </td>
                                    <td>{item.product_price}</td>
                                    <td>
                                        {/*<button onClick={() => handleDelete(item.product_no)}>삭제</button>*/}
                                        <button>삭제</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>
                                <button onClick={handleBulkDelete}>선택상품 삭제</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className={styles.cart_bottomcontainer}>
                <div className={styles.cart_bottomleft_container}>
                    <div className={styles.cart_box}>포인트 입력</div>
                    <p>사용하실 포인트를 입력해 주세요</p>
                    <p>현재 보유 포인트 : {memberInfo.member_point}</p>
                    <div>
                        {/* input type추후에 수정해주세요 */}
                        <label>
                            <input type="text" placeholder="포인트" />{' '}
                            <button className={styles.cart_input_button}
                            onClick={handleApplyPoints}>포인트 적용</button>
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
                                {/*{cartItems.map(item => (totalPrice + item.product_price*1) )}*/}
                                {totalPrice}
                                <strong>원</strong>
                            </li>

                            <li className={styles.cart_bottomright_delivery}>
                                <strong>배송비</strong>
                                <strong>0 원</strong>
                            </li>

                            <li className={styles.cart_bottomright_totalprice}>
                                <strong>합계</strong>
                                {totalPrice}
                                <strong>원</strong>
                            </li>
                        </ul>
                        <Link to='/orders'>
                            <button className={styles.cart_payment} onClick={handleCheckout}>주문하기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
