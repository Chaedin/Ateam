import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionItem from "../elements/accordionitem";
import Cspagebutton from "../elements/cspagebutton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from '../css/cspage.module.css';

const Cspage = () => {
    return (
        <main>
            <nav>
                <div className="navbar_child buttonstyle">
                    <span>고객센터</span>
                </div>
            </nav>
            <div className="inputbox_wrapper">
                <input id="searchInput" type="text" placeholder="자주묻는 질문 검색" />
                <button>
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                </button>
            </div>

            <div className="button_box">
                <Cspagebutton dataCategory="*" buttonName="전체" />
                <Cspagebutton dataCategory="shipping" buttonName="배송문의" />
                <Cspagebutton dataCategory="change" buttonName="취소/교환" />
                <Cspagebutton dataCategory="purchase" buttonName="주문/결제" />
                <Cspagebutton dataCategory="userService" buttonName="회원서비스" />
            </div>

            <Accordion>
                <AccordionItem eventKey="0" accordionhead="헤드입니다" accordionbody="바디입니다" />
                <AccordionItem eventKey="" accordionhead="헤드입니다" accordionbody="222바디입니다" />
            </Accordion>
        </main>
    );
};

export default Cspage;
