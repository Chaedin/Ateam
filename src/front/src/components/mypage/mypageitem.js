import React from "react";
import style from '../mypage/mypage.module.css'

const Mypageitem = () => {
    return (
        <tr className={`${style.order_main} ${style.mypageTr}`} >
            <td className={style.mypageTd}>
                <img src={require('../../image/pexels-karolina-grabowska-8361484.jpg')} alt="" />
            </td>
            <td className={style.mypageTd}> 향수</td>
            <td className={style.mypageTd}>50,000원</td>
            <td className={`${style.delivery} ${style.mypageTd}`}>
                <span>배송 조회</span>
            </td>
        </tr>
    );
};

export default Mypageitem;
