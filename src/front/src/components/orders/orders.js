import React, {useEffect, useState} from "react";
import axios from "axios";
import Mypageitem from "../mypage/mypageitem";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const Orders = () => {
    const [myInfo, setMyInfo] = useState({}); // 내정보
    const [product, setProduct] = useState({});   // 상품
    const member_id = sessionStorage.getItem('loginID');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const modalStyles = {
        content: {
            width: "600px",
            height: "500px",
            margin: "auto",
        },
    };

    const handleAddressSelect = (data) => {
        const { zonecode, roadAddress, jibunAddress } = data;

        document.querySelector("[name=member_post]").value = zonecode;
        document.querySelector("[name=member_basic_addr]").value = roadAddress || jibunAddress;

        handleModalClose();
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/member/myinfo?member_id=${member_id}`)
            .then(response => {
                setMyInfo(response.data);
            })
            .catch((error)=>{
                console.error('내정보 불러오기에 실패했습니다.')
            })
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:8080/cart/main?member_id=${member_id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch((error)=>{
                console.error('상품정보를 불러오는데 실패했습니다.')
            })
    },[])

    useEffect(()=>{
        Modal.setAppElement('#root');
    }, []);



    return (
        <>
        <div>
            <h2>
                주문페이지
            </h2>
            <br />
            <h3>
                주문하신 상품정보
            </h3>
            <table>
                <tr>
                    <th></th>
                    <th>제품명</th>
                    <th>가 격</th>
                    <th>배송조회</th>
                </tr>
                <Mypageitem></Mypageitem>
            </table>
            <br/>
            <h3>받으실 분</h3>
            <div>
                <div>
                    <h3>성함</h3>
                    <input type="text" name="member_name" placeholder="이름" value={myInfo?.member_name} readOnly/>
                    <h3>연락처</h3>
                    <input type="text" name="member_phone" placeholder="연락처" value={myInfo?.member_phone}/>
                </div>
                <h2>배송지</h2>
                <div>
                    <h3>우편번호</h3>
                    <input type="text" name="member_post" placeholder="우편번호" value={myInfo?.member_post} readOnly/>
                    <button type="button" className="find-address-btn" onClick={handleModalOpen}>검색</button>
                    <br/>
                    <h3>기본주소</h3>
                    <input type="text" name="member_basic_addr" placeholder="기본주소" value={myInfo?.member_basic_addr}/>
                    <br/>
                    <h3>상세주소</h3>
                    <input type="text" name="member_detail_addr" placeholder={"상세주소"} value={myInfo?.member_detail_addr}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Orders;