import React from 'react';
import { useEffect } from 'react';
import banner1 from '../image/about_banner1.jpg'
import banner2 from '../image/about_banner2.jpg'
import banner3 from '../image/about_banner3.jpg'
import style from '../css/about.module.css';

const About = () => {

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.opacity = 0;
                }
            });
        });

        let containers = document.querySelectorAll('.about__container');
        let eco = document.querySelector('.about__eco');

        containers.forEach((container) => {
            observer.observe(container);
        });

        observer.observe(eco);

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <section id="about">
            <div className="about__container">
                <p className="p__story">our Story</p>
                <h2 className="h2__story">오늘 당신은 어떠한 향수를 입고 있나요?</h2>
                <div className="divider"></div>
                <p className="eco__p">향수란 단순 향기가 아닌 나의 정체성을 의미합니다</p>
                <p className="eco__p">나에게 맞는 향수를 찾는 것은 나의 정체성을 찾는 과정입니다</p>
                <div className="about__img">
                    <img src={banner1} alt="" />
                </div>
            </div>
            <div className="about__container pop">
                <h2 className="h2__story">지금 스스로에게 만족스러운 향수를 사용하고 있나요?</h2>
                <div className="divider"></div>
                <p className="eco__p">전 세게에 있는 많은 브랜드와 수만 개의 향수 중 당신의 향수를 찾는 것은 운명과 같습니다</p>
                <p className="eco__p">하지만 저희는 단순히 향과 사람만을 이어주는것에 그치지 않습니다</p>
                <div className="about__img">
                    <img src={banner2} alt="" />
                </div>
            </div>
            <div className="about__container pop">
                <h2 className="h2__story">당신은 자연을 지키고 있습니까??</h2>
                <div className="divider"></div>
                <p className="eco__p">미국 국립해양대기국(NOAA) 연구팀의 연구 결과에 따르면 대기오염원으로</p>
                <p className="eco__p">세척제나 에어로졸, 향수 같은 소비재에서 매일 나오는 VOC가 자동차 배기가스에 필적한다고 합니다.</p>
                <p className="eco__p">저희는 자연을 아끼기위해 친환경적인 재료로 향수를 제조 합니다</p>
                <div className="about__eco">
                    <h3 className="eco__title">Saving</h3>
                    <div className="eco">
                        <div className="eco__description">
                            <span>유리사용 감소</span>
                            <span>24%</span>
                        </div>
                        <div className="eco__bar">
                            <div className="eco__value" style={{ width: '24%' }}></div>
                        </div>
                    </div>
                    <div className="eco">
                        <div className="eco__description">
                            <span>탄소배출 감소량</span>
                            <span>60%</span>
                        </div>
                        <div className="eco__bar">
                            <div className="eco__value" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                    <div className="eco">
                        <div className="eco__description">
                            <span>자연원료 사용량</span>
                            <span>40%</span>
                        </div>
                        <div className="eco__bar">
                            <div className="eco__value" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="eco">
                        <div className="eco__description">
                            <span>재활용 제품 사용량</span>
                            <span>90%</span>
                        </div>
                        <div className="eco__bar">
                            <div className="eco__value" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
                <p className="eco__p">자연을 파괴하는 향수가 아닌 자연을 지킬 수 있으며</p>
                <p className="eco__p">자연으로부터 잠시 그 향을 빌려온다는 생각으로 친환경적인 향수를 제조할 수 있도록 노력하겠습니다</p>
                <div className="about__img">
                    <img src={banner3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;