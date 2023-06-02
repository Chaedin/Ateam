import React from 'react';
import { MainpageItem1, MainpageItem2 } from '../elements/mainpageitem';
import mainimg1 from '../image/temp_main_img_tonedown.jpg'
import Topimg from '../elements/topimg';
import '../css/main.css';

const Main = () => {

    const items = [MainpageItem1, MainpageItem2];
    // 다른 아이템 추가할 시 ,mainpageitem에 함수 생성수 배열에 집어넣어서 map 사용

    return (
        <main>
            <Topimg/>
            
            <section id="discription_story">
                <div className="discriptino_story_text">
                    <h2>자연을 품으며 자연을 지키는 향수</h2>
                    <p>
                        저희 Ateam은 자연의 가치를 중요하게 생각합니다.<br />
                        자연에서부터 그 향을 빌려온다는 생각으로 친환경적인 재료와 방법으로
                        <br />자연과 공존하며 자연의 향을 품을 수 있도록 노력하겠습니다.
                    </p>
                </div>
                <div className="discription_content">
                    <div className="discription_content_left"></div>
                    <div className="discription_content_center">
                        <div className="discription_content_center_top"></div>
                        <div className="discription_contenst_center_bottom"></div>
                    </div>
                    <div className="discription_content_right"></div>
                </div>
            </section>

            <section id="best_seller">
                <div className="best_seller_title">
                    <h2>BEST SELLER</h2>
                </div>

                <ul className="best_seller_items">

                    {Array(8).fill().map((nouse, index) => {
                        const Item1 = items[0];
                        return <Item1 key={index} />;
                    })}

                </ul>
            </section>

            <section id="new_arrival">
                <div className="new_arrival_title">
                    <h2>NEW ARRIVAL</h2>
                </div>
                <ul className="new_arrival_items">

                    {
                        Array(8).fill().map((nouse, index) => {
                            const Item2 = items[1];
                            return <Item2 key={index} />
                        })

                    }
                </ul>
            </section>

        </main>
    )
}

export default Main;