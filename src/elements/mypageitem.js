import React from "react";
import itemimg1 from '../image/pexels-karolina-grabowska-8361484.jpg';

const Mypageitem = () => {
    return (
        <tr className="order_main mypageTr" >
            <td className="mypageTd">
                <img src={itemimg1} alt="" />
            </td>
            <td className="mypageTd"> 향수</td>
            <td className="mypageTd">50,000원</td>
            <td className="delivery mypageTd">
                <span>배송 조회</span>
            </td>
        </tr>
    );
};

export default Mypageitem;
