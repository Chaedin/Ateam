import React from 'react';
import style from './modal.module.css';

const Modal = (props) => {
    const { open, close, header } = props;

    return (
        <div className={open ? `${style.openModal} ${style.modal}` : style.modal}>
            <section>
                <header>
                    문의 하기
                    <button onClick={close}>
                        &times;
                    </button>
                </header>
                <form className={style.modal_form}>
                    <main>
                        <label><p>이름</p><br />
                            <input type='text' id='member_id'></input>
                        </label><br />
                        <label><p>전화번호</p><br />
                            <input type='text' id='qa_phone'></input>
                        </label><br />
                        <label><p>문의 제목</p><br />
                            <input type='text' id='qa_title'></input>
                        </label><br />
                        <label><p>문의 내용</p><br />
                            <textarea type='text' id='qa_content' style={{ width: '300px', height: '150px' }} />
                        </label><br />
                        <div className={style.form_radiobox}>
                            <label>
                                <input type="radio" id="public" name="visibility" value="public" checked />
                                &nbsp;&nbsp;공개
                            </label>
                            <label>
                                <input type="radio" id="private" name="visibility" value="private" />
                                &nbsp;&nbsp; 비공개
                            </label><br />
                        </div>
                    </main>
                    <footer>
                        <button onClick={close}>
                            문의
                        </button>

                        <button onClick={close}>
                            닫기
                        </button>
                    </footer>
                </form>
            </section>
        </div>
    );
}

export default Modal;
