import React from "react";  


function ModalBasic({ setModalOpen }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="modalsize">
            <p className="inputcoupon">쿠폰을 넣은 후 Roll된다면, CSS 마저 수정하시면 됩니다</p>
            <button className="close" onClick={closeModal}>
                X
            </button>
        </div>
    );
}
export default ModalBasic;