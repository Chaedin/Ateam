import React from 'react';
import img1 from '../image/pexels-abdulrhman-alkady-6947682.jpg';
import img2 from '../image/pexels-animesh-srivastava-7896916.jpg';
import img3 from '../image/pexels-yusuf-arslan-3640668.jpg';
import img4 from '../image/pexels-anis-salmani-11711835.jpg';
import img5 from '../image/pexels-mathilde-langevin-10897665.jpg';
import img6 from '../image/pexels-karolina-grabowska-8361486.jpg';
import style from '../css/footer.module.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_about">
                <div className="footer_about_anker">
                    <h3>ATEAM</h3>
                    <a href="subPage/Aboutus/index.html">About</a>
                    <a href="#">Guide</a>
                    <a href="#">Agreement</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div>
                    <h3>Banking Info</h3>
                    <p>국민 111111-11-111111</p>
                    <p>신한 11-11111-111</p>
                    <p>예금주: 연아람</p>
                </div>
            </div>
            <div className="footer_information">
                <h3>Shop Information</h3>
                <p>AM 10:00 - PM 6:00, 주말 및 공휴일은 휴무입니다</p>
                <p>
                    상호 ateam, 대표 연아람<br />
                    캘리포니아 쿠퍼티노<br />
                    사업자 등록 번호 111-11-11111<br />
                    통신판매업번호 2023-몰루-0001호<br />
                    개인정보관리책임자 없음<br />
                    이메일 admin@xxx.com<br />
                </p>
            </div>
            <div className="footer_instagram">
                <h3>Instagram by @ateam</h3>
                <ul className="footer_instagram_img">
                    <li>
                        <img src={img1} alt="" />
                    </li>
                    <li>
                        <img src={img2} alt="" />
                    </li>
                    <li>
                        <img src={img3} alt="" />
                    </li>
                    <li>
                        <img src={img4} alt="" />
                    </li>
                    <li>
                        <img src={img5} alt="" />
                    </li>
                    <li>
                        <img src={img6} alt="" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
