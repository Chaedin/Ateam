import React, { useState } from 'react';
import Topimg from '../topimg/topimg';
import { Link } from 'react-router-dom';
import style from '../login/login.module.css';
// import NaverLogin from './NaverLogin';


const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nonMemberId, setNonMemberId] = useState('');
    const [nonMemberPassword, setNonMemberPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNonMemberIdChange = (e) => {
        setNonMemberId(e.target.value);
    };

    const handleNonMemberPasswordChange = (e) => {
        setNonMemberPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };



    return (
        <>
            <Topimg />

            <section>
                <div className={style.main_container}>
                    <div className={style.login_container}>
                        <h1 className={style.login}>Login</h1>
                        <div className={style.members}>
                            <button className={style.visible}>회원 로그인</button>
                            <button>비회원 로그인</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={`${style.box} ${style.member_box}${style.show}`}>
                                <div className={style.login_id}>
                                    <input
                                        type="text"
                                        className={style.member_id}
                                        name="id"
                                        placeholder="ID"
                                        value={id}
                                        onChange={handleIdChange}
                                        required
                                    />
                                    <p className={style.warning_id} style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        아이디가 입력되지 않았습니다.
                                    </p>
                                </div>
                                <div className={style.login_pw}>
                                    <input
                                        type="password"
                                        className={style.member_pw}
                                        name="pw"
                                        placeholder="PASSWORD"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <p className={style.warning_pw} style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비밀번호가 입력되지 않았습니다.
                                    </p>
                                </div>
                            </div>

                            <div className={`${style.box} ${style.non_member_box}`}>
                                <div className={style.non_member_login_id}>
                                    <input
                                        type="text"
                                        className={style.non_member_id}
                                        name="id_nonmember"
                                        placeholder="PHONE NUMBER (-빼고 입력하세요.)"
                                        value={nonMemberId}
                                        onChange={handleNonMemberIdChange}
                                        required
                                    />
                                    <p className={style.warning_id} style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비회원 정보가 올바르지 않습니다.
                                    </p>
                                </div>
                                <div className={style.non_member_login_pw}>
                                    <input
                                        type="password"
                                        className={style.non_member_pw}
                                        name="pw_nonmember"
                                        placeholder="임시 비밀번호 4자리 "
                                        value={nonMemberPassword}
                                        onChange={handleNonMemberPasswordChange}
                                        required
                                    />
                                    <p className={style.warning_pw} style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비밀번호가 입력되지 않았습니다.
                                    </p>
                                </div>
                            </div>
                            <div className={style.login_enter}>
                                <button type="submit" className={style.login_login} id="send">
                                    로그인
                                </button>
                            </div>
                        </form>

                        <div className={style.login_middle}>
                            <a href="#" className={style.find}>
                                ID/PW 찾기
                            </a>
                            <Link to='/joinus' className={style.join}>
                                회원가입
                            </Link>
                        </div>

                        <span>OR</span>

                        <div>
                            {/* <img src={require('../../image/컬러네이버.png')} alt="네이버" /> */}
                            {/* <NaverLogin/> */}
                            <img src={require('../../image/컬러카카오.png')} alt="카카오" />
                            <img src={require('../../image/컬러구글.png')} alt="구글" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
