import React from 'react';
import style from '../itemmain/itemmain.module.css';

function MainpageItem1() {
    return (
        <li className={style.best_seller_item} data-type='2'>
            <a href="./subPage/iteminfo1/index.html">
                <div className={`${style.item_thumbnail} ${style.saleIcon}`}>
                    <img src={require('../../image/pexels-karolina-grabowska-8361484.jpg')} alt="" />
                    <div className={style.discription_detail}>
                        <h2>sample name</h2>
                        <p>
                            이탈리라어로 봄을 뜻하는 프리마베라는 이탈리아 토스카나
                            지역의 엄선된 천연 재료로 만들어 부드럽고 푸른향을
                            선사합니다.
                        </p>
                    </div>
                </div>
            </a>
            <div className={style.discription_item}>
                <div className={style.discription_item_name}>PRIMAVERA</div>
                <div className={style.discription_item_price}>50,000</div>
            </div>
        </li>
    );
}

function MainpageItem2() {
    return (
        <li className={style.new_arrival_item} data-type='3'>
            <a href="./subPage/iteminfo4/index.html">
                <div className={style.item_thumbnail}>
                    <img src={require('../../image/pexels-karolina-grabowska-8361526.jpg')} alt="" />
                    <div className={style.discription_detail}>
                        <h2>sample name</h2>
                        <p>
                            숲의 향기를 담은 향수입니다<br />
                            천연 원료를 사용하여 친환경적이며<br />
                            부드럽고 은은한 향기가 몸을 감십니다.<br />
                        </p>
                    </div>
                </div>
            </a>
            <div className={style.discription_item}>
                <div className={style.discription_item_name}>sample text</div>
                <div className={style.discription_item_price}>50,000</div>
            </div>
        </li>
    );
}

function MainpageItem3() {
    return (
        <li className={style.new_arrival_item} data-type='4'>
        <a href="./subPage/iteminfo4/index.html">
            <div className={style.item_thumbnail}>
                <img src={require('../../image/pexels-karolina-grabowska-8361538.jpg')} alt="" />
                <div className={style.discription_detail}>
                    <h2>sample name</h2>
                    <p>
                        숲의 향기를 담은 향수입니다<br />
                        천연 원료를 사용하여 친환경적이며<br />
                        부드럽고 은은한 향기가 몸을 감십니다.<br />
                    </p>
                </div>
            </div>
        </a>
        <div className={style.discription_item}>
            <div className={style.discription_item_name}>sample text</div>
            <div className={style.discription_item_price}>50,000</div>
        </div>
    </li>
    )
} 
export { MainpageItem1,MainpageItem2,MainpageItem3};
