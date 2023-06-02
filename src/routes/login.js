import React, { useState } from 'react';
import Topimg from '../elements/topimg';
import img1 from '../image/컬러네이버.png'
import img2 from '../image/컬러카카오.png'
import img3 from '../image/컬러구글.png'
import { Link } from 'react-router-dom';
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
                <div className="main_container">
                    <div className="login_container">
                        <h1 className="login">Login</h1>
                        <div className="members">
                            <button className="visible">회원 로그인</button>
                            <button>비회원 로그인</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="box member_box show">
                                <div className="login_id">
                                    <input
                                        type="text"
                                        className="member_id"
                                        name="id"
                                        placeholder="ID"
                                        value={id}
                                        onChange={handleIdChange}
                                        required
                                    />
                                    <p className="warning_id" style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        아이디가 입력되지 않았습니다.
                                    </p>
                                </div>
                                <div className="login_pw">
                                    <input
                                        type="password"
                                        className="member_pw"
                                        name="pw"
                                        placeholder="PASSWORD"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <p className="warning_pw" style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비밀번호가 입력되지 않았습니다.
                                    </p>
                                </div>
                            </div>

                            <div className="box non_member_box">
                                <div className="non_member_login_id">
                                    <input
                                        type="text"
                                        className="non_member_id"
                                        name="id_nonmember"
                                        placeholder="PHONE NUMBER (-빼고 입력하세요.)"
                                        value={nonMemberId}
                                        onChange={handleNonMemberIdChange}
                                        required
                                    />
                                    <p className="warning_id" style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비회원 정보가 올바르지 않습니다.
                                    </p>
                                </div>
                                <div className="non_member_login_pw">
                                    <input
                                        type="password"
                                        className="non_member_pw"
                                        name="pw_nonmember"
                                        placeholder="임시 비밀번호 4자리 "
                                        value={nonMemberPassword}
                                        onChange={handleNonMemberPasswordChange}
                                        required
                                    />
                                    <p className="warning_pw" style={{ display: 'none', color: 'red', fontSize: 'smaller' }}>
                                        비밀번호가 입력되지 않았습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="login_enter">
                                <button type="submit" className="login_login" id="send">
                                    로그인
                                </button>
                            </div>
                        </form>

                        <div className="login_middle">
                            <a href="#" className="find">
                                ID/PW 찾기
                            </a>
                            <Link to='/joinus' className="join">
                                회원가입
                            </Link>
                        </div>

                        <span>OR</span>

                        <div>
                            <img src={img1} alt="네이버" />
                            <img src={img2} alt="카카오" />
                            <img src={img3} alt="구글" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;