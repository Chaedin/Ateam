import React from "react";
import { Link } from "react-router-dom";
import style from '../css/joinus.module.css';


const Joinus = () => {
    return (
        <section className={style.main}>
            <h1 className={style.join_us}>Join Us</h1>

            <form action="">
                <div id={style.injoy}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.userId}>
                                        <input type="text" className="id" name="id" required />
                                        <button>중복확인</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>PASSWORD</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.userPw}>
                                        <input type="password" className="pw" name="pw" required />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>VERIFY PASSWORD</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.userPw}>
                                        <input type="password" className="pw" name="verify_pw" required />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>NAME</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.userName}>
                                        <input type="text" className="name" name="name" required />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>DATE OF BIRTH</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.birth}>
                                        <select name="year">
                                            {/* option[value="$@-1944"]{$@-1944}*80 */}
                                            {Array.from({ length: 80 }, (_, i) => {
                                                const year = 2023 - i;
                                                return (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <select name="month">
                                            {Array.from({ length: 12 }, (_, i) => {
                                                const month = i + 1;
                                                return (
                                                    <option key={month} value={month}>
                                                        {month}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <select name="day">
                                            {Array.from({ length: 31 }, (_, i) => {
                                                const day = i + 1;
                                                return (
                                                    <option key={day} value={day}>
                                                        {day}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>E-MAIL</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.email}>
                                        <input type="text" name="emailId" required /> @
                                        <select name="email_domain">
                                            <option value="naver.com">naver.com</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="gmail.com">gmail.com</option>
                                        </select>
                                    </div>
                                    <input type="checkbox" /> 이메일 수신 동의
                                </td>
                            </tr>

                            <tr>
                                <td>PHONE NUMBER</td>
                                <td className={style.joinusInputTd}>
                                    <div className={style.userPhone}>
                                        <input type="text" minLength="3" maxLength="3" size="2" required /> &#8722;
                                        <input type="text" minLength="4" maxLength="4" size="2" required /> &#8722;
                                        <input type="text" minLength="4" maxLength="4" size="2" required />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={style.terms}>
                        <input type="checkbox" required />
                        <a href="../terms/terms.html" target="_blank" rel="noopener noreferrer">
                            개인정보 처리방침
                        </a>
                        에 따라 개인 정보를 수집, 사용, 타사에 대한 제공 및 처리하는 데 동의합니다.
                    </p>

                    <hr className={style.under_terms} />

                    <button className={style.injoy_btn}>
                        <Link to='/main'>회원가입</Link>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Joinus;