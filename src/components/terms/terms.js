import { React } from "react";
import { Link } from "react-router-dom";
import style from "../terms/terms.module.css";


const Terms = () => {
    return (
        <div class={style.container}>

            <div class={style.logo_container}>
                <h1>𝘼 𝙏𝙚𝙖𝙢</h1>
            </div>


            <hr />

            <div class={style.main_container}>
                <div class={style.term_list}>
                    <div class={style.term_name}>
                        <h2>이용약관</h2>
                    </div>
                    <p>
                        본 약관은 2023년 01월 01일부터 시행됩니다.
                        이용약관

                        Jo Malone London Korea Online 웹사이트(이하 '본 사이트')에 오신 것을 환영합니다.
                        Jo Malone London Korea Online(“이하 “회사”)는 아래의 약관, 개인정보처리방침 및 고객 서비스와 특정 기능, 게시물 또는 홍보와 관련하여 본 사이트 전체에서
                        제시하는 여타 조건과 정책 (본 약관(통칭하여, '본 약관'이라 합니다)의 일부이며 그에 포함되는 것으로 간주됩니다)에 따라, 이용자에게 본 사이트상 컨텐츠와 서비스를 제공합니다.
                        이용자는 본 사이트에 접속하거나 이용함으로써 본 약관을 읽고, 이해하였으며, 일체의 제한요건이나 자격을 불문하고 본 약관에 따르기로 합의하였음을 인정하는 것입니다 .
                    </p>
                    <h2>1. 개인정보보호</h2>
                    <p>회사의 개인정보처리방침에 대한 이해를 돕기 위하여 회사의 개인정보취급방침을 참조하시기 바랍니다.</p>

                    <h2>2. 개인 용도의 제품 및 서비스</h2>
                    <p>
                        본 사이트에서 제공되는 제품과 서비스 및 회사가 이용자에게 제공할 수 있는 제품 등의 샘플 일체는 개인 용도에 국한됩니다. 이용자는 회사로부터 구매하거나 달리 수령한 모든 제품, 서비스
                        또는 동 제품 등의 샘플을 판매 또는 재판매 할 수 없습니다. 회사는 본 약관을 위반하는 결과를 초래할 수 있다고 판단하는 경우, 통지의 유무를 불문하고, 모든 주문 또는 이용자에게
                        제공된 제품이나 서비스를 취소하거나 그 제품의 수량을 감축할 수 있는 권리를 보유합니다.
                    </p>

                    <h2>3. 구매 관련 정책 및 절차</h2>
                    <p>
                        • 배송정보
                        주문하신 제품은 결제 완료된 시점으로부터 영업일 기준 3일 정도 소요됩니다. 단, 도서 지역 및 섬 지역은 지연 될 수 있으며, 명절 및 연말이나 주문 폭주 시 또한 지연될 수
                        있습니다.
                        공휴일 및 기타 휴무일에는 배송 되지 않고 배송 소요 기간에서 제외됩니다.
                        <br />
                        • 반품 및 교환
                        온라인 쇼핑몰에서 구매하신 제품은 개봉 스티커를 제거하지 않은 제품에 한하여 반품이 가능하며 제품을 반품하실 때에는 배 송 받으셨던 포장 박스에 제품을 모두 넣어 보내주셔야 합니다.
                        변심에 의한 반품의 경우 제품 수령 7일 이내에 반품 신청이 가능하며, 제공받은 상품이 주문 제품의 내용과 다르거 나 계약내용과 다르게 이행된 경우에는 공급받은 날부터 3개월, 그 사실을
                        안 날로부터 30일 이내에 반품 신청이 가능합니다.
                        <br/><br/>
                        단, 아래와 같은 경우는 예외로 인정하여 반품 이 불가합니다.
                        <br/>
                        • 단순 변심으로 인한 반품/교환 요청이 상품 등을 실제 받으신 날로부터 7일을 경과한 경우
                        <br/>
                        • 고객님의 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우
                        <br/>
                        • 포장을 개봉하였거나 포장이 훼손되어 상품가치가 현저히 상실된 경우 (재화 등의 내용을 확인하기 위하여 포장 등을 훼손하였으나 제품에 하자가 있어 반품/교환을 요청하는 경우는 제외)
                        <br/>
                        • 고객의 사용 또는 일부 소비에 의하여 제품의 가치가 감소한 경우
                        <br/>
                        • 시간이 경과되어 재판매가 곤란할 정도로 제품의 가치가 상실된 경우
                        <br/>
                        • 제품 인수 시 포함되어 있던 사은품 및 샘플 등이 누락된 경우
                    </p>

                    <h2>4. 정보의 정확성</h2>
                    <p>
                        회사는 본 사이트에 제품을 게재함에 있어서 가능한 한 정확한 정보를 제공하고자 합니다. 그러나, 관련 법률의 허용범위 내에서, 제품설명, 색상, 정보 또는 본 사이트에서 제공되는 기타
                        컨텐츠의 정확성, 완전성, 신뢰성, 유효성, 무하자 및 무오류를 보장하지 아니합니다.
                    </p>

                    <h2>5. 지적 재산</h2>
                    <p>
                        본 사이트에서 이용할 수 있는 모든 정보와 컨텐츠 및 “Looks and feel”의 요소들(상표, 로고, 서비스마크, 텍스트, 그래픽, 로고, 버튼 아이콘, 이미지, 오디오 클립,
                        데이터 편집물, 소프트웨어 및 위 각 요소의 편집물 및 결합물을 포함하며 이에 한정되지 않습니다, 통칭하여 “본 컨텐츠”)은 회사 및 회사의 계열사, 파트너 또는 라이센서의 재산이며,
                        저작권과 상표권을 규율하는 관계 법률들에 의하여 보호받습니다.
                        아래 제6조 제한적 이용허락 조항에 규정된 경우 또는 관련 법률에 의하여 요구되는 경우를 제외 하고, 본 컨텐츠 또는 본 사이트의 어떠한 부분도 회사의 명시적인 사전 서면동의 없이는 전체
                        또는 부문을 막론하고, 어떠한 목적으로든지 사용, 재생, 복제, 복사, 판매, 재판매, 접속, 수정 또는 달리 이용될 수 없습니다.
                    </p>

                    <h2>6. 제한적 이용허락</h2>
                    <p>
                        회사는 이용자가 본 사이트에 접속하여 개인 용도로 본 사이트를 이용할 수 있는 제한적이고 취소가능하며 비독점적인 이용권한을 이용자에게 허용합니다. 
                        <br/><br/>
                        이 제한적 이용권한은 (a) 본 사이트 또는 본 사이트의 일부를 포함하여 프레이밍(frame)하거나 프레이밍 기술을 활용할 수 있는 권리, (b) 본 사이트 또는 본 컨텐츠의 일부 및/또는 전부를 재출판, 재배포, 전송,
                        판매하거나, 본 사이트 또 는 본 컨텐츠의 일부 및/또는 전부에 사용권을 허용하거나, 동 사이트 등을 다운로드 할 수 있는 권리(캐싱이나 본 사이트를 조회하기 위하여 필요한 경우를
                        제외합니다), (c) 개인 용도를 제외한 다른 목적으로 본 사이트나 본 컨텐츠의 일부 및/또는 전부를 사용할 수 있는 권리, (d) 본 사이트나 본 컨텐츠의 전부 또는 일부에 기반한
                        파생물을 개작, 역분석, 또는 생성할 수 있는 권리, (e) 이용자 또는 다른 상대방의 이익을 위하여 계정 정보를 수집할 수 있는 권리, (f) 메타 태그(meta tags) 또는 본
                        컨텐츠의 일부 및/또는 전부를 활 용한 '숨겨진 텍스트'를 사용할 수 있는 권리, 또는 (g) 소프트웨어 로봇, 스파이더, 크롤러 또는 이와 유사한 데이터 수집 및 추출 도구를 사용할 수
                        있는 권리나 회사의 기반시설 에 불합리한 부담이나 부하를 줄 수 있는 여타 행동을 할 수 있는 권리를 포함하지 않습니다. 이용자는 본 사이트상 또는 본 사이트에 첨부되거나 그에 포함되는
                        모든 권리에 관한 통지를 변경 없이 보유하여야 합니다.
                        <br/><br/>
                        회사는 또한 이용자에게 개인적, 비상업적 용도에 국한하여 본 사이트의 홈페이지에 하이퍼링크를 설정할 수 있는 제한적이고 취소가능하며 비독점적인 이용권한을 허여합니다. 본 사이트에 링크된
                        웹사이트는(i) 회사 본 컨텐츠의 일부 및/또는 전부에 링크될 수는 있지만 본 컨텐츠를 복제할 수 없고,(ii) 회사가 링크된 사이트나 동 사이트의 제품이나 서비스를 추천하는 것을
                        의미하지 아니하며,(iii) 링크된 사이트와 회사와의 관계를 허위로 표시하거나, (iv) 혐오스럽고, 외설적이며, 불쾌하고, 논쟁적이거나, 불법적이거나, 모든 연령층에게 부적합한 것으로
                        해석될 수 있는 본 컨텐츠를 포함할 수 없으며, (v) 회사나 회사의 제품 또는 서비스를 폄하하거나 허위로 묘사하거나, 또는 불쾌하거나 혐오스러운 방식으로 묘사할 수 없으며, 회사를
                        바람직하지 않은 제품, 서비스, 의견과 연관시킬 수 없고, (vi) 홈페이지 첫 화면 이외의 본 사이트 웹페이지에 링크할 수 없습니다. 회사는 재량 하에 이용자가 본 사이트에 연결한 모든
                        링크를 삭제할 것을 요청할 수 있으며, 이용자는 이와 같은 요청을 받은 즉시 해당 링크를 삭제하고, 링크설정을 재개할 수 있는 별도의 명시적인 서면 승인을 회사로부터 득하지 않는 한
                        일체의 링크설정 행위를 중단하여야 합니다. 이용자가 본 사이트 또는 본 컨텐츠의 일부 및/또는 전부를 승인 받지 않고 사용할 경우, 본 약관 제6조에 규정된 제한적 이용권한은 관련
                        법률이나 본 약관에 규정된 여타 구제책에 영향을 미치지 아니한 채 자동적으로 해지됩니다.
                    </p>

                    <h2>7. 이용자의 의무 및 책임</h2>
                    <p>
                        이용자는 본 사이트에 접속하거나 본 사이트를 이용하는 과정에서 본 약관과 본 사이트에 게재된 접속 및 사용과 관련된 특별한 경고나 지침을 준수하여야 합니다. 이용자는 항시 법률, 관습 및
                        신의에 따라 행동해야 합니다. 이용자는 본 사이트 또는 본 사이트에 나타날 수 있는 모든 컨텐츠 또는 서비스를 변경할 수 없으며, 어떠한 방식으로도 본 사이트의 완결성이나 본 사이트의
                        운영을 훼손, 방해할 수 없습니다. 본 약관의 여타 조항의 일반성을 제한하지 않는 범위 내에서 본 약관에 규정된 의무사항을 고의 또는 과실로 이행하지 못할 경우, 이용자는 회사, 회사의
                        계열사, 파트너, 라이센서에게 발생할 수 있는 모든 손실과 손해에 대한 책임을 부담할 것입니다.
                    </p>

                    <h2>8. 이용자 계정</h2>
                    <p>
                        이용자가 만 14세 이상일 경우, 본 사이트에 등록할 수 있습니다. 만 14세 미만일 경우에는 등록할 수 없습니다. 이용자는 전술한 정보의 유효성, 완전성, 정확성 및 진실성을 유지하여야
                        할 책임이 있습니다. 이용자는 현재 유효하고, 완전하고, 정확하며 진실한 정보만을 제공할 것에 동의합니다. 이용자가 타인을 대신하여 본 사이트에 접속하여 사용할 경우, 이용자는 그가
                        본인의 자격으로 본 약관에서 규정된 모든 조건에 구속되게 할 권한을 보유하고 있음을 진술하고, 그러한 권한을 부여 받지 못하는 한, 이용자는 본 약관의 적용을 받고 그와 같은 본 사이트에
                        대한 접속이나 사용으로부터 발생할 수 있는 본 사이트 또는 본 컨텐츠의 오용에 의한 손해에 대하여 책임을 부담함을 승낙합니다. 본 약관이 위반된 경우나 회사에 있어 최선의 이익에 해당되는
                        경우라고 판단한 경우, 회사는 사전통지 없이 서비스의 제공을 거부하거나 또는 제공을 거부하고 계정을 해지할 권리를 보유합니다.
                    </p>

                    <h2>9. 제3자 링크</h2>
                    <p>
                        회사는 본 사이트로부터 또는 본 사이트에 링크된 일체의 오프웹사이트 페이지들(off-website pages) 또는 여타 웹사이트의 컨텐츠에 대해 책임지지 않습니다.본 사이트에 나타나는
                        링크는 사용 상의 편의를 위한 것이며, 회사나 회사의 계열사 또는 파트너가 링크 상의 컨텐츠, 제품, 서비스 또는 공급업체를 추천하는 것은 아닙니다. 본 사이트로부터 또는 본 사이트에
                        링크된 일체의 오프웹사이트 페이지나 여타 웹사이트에 링크를 설정함으로 인한 위험은 이용자가 부담합니다. 회사는 링크된 사이트를 심사 또는 평가할 의무를 부담하지 않고, 본 사이트로부터
                        또는 본 사이트에 링크된 일체의 오프웹사이트나 여타 웹사이트의 컨텐츠를 보증하지 않으며, 그러한 페이지나 웹사이트의 개인정보처리방침 및 약관을 포함하여 동 페이지 및 웹사이트의 조치,
                        컨텐츠, 제품 또는 서비스에 대해 아무런 책임이나 의무를 부담하지 않습니다. 이용자는 방문하는 모든 오프웹사이트 페이지 및 여타 웹사이트의 약관 및 개인정보처리방침을 주의 깊게 검토하여야
                        합니다.
                    </p>

                    <h2>10. 특별 게시물, 기능 및 이벤트</h2>
                    <p>
                        본 사이트는 특별 게시물, 기능 또는 이벤트(컨테스트, 경품행사, 기타 이벤트 등)를 제공할 수 있고, 그 게시물 등은 (a) 본 약관에 추가되거나 또는 본 약관을 대신하는 이용 조건,
                        규칙 및/또는 정책의 적용을 받을 수 있으며, (b) 회사나 제3자에 의하여 제공될 수 있습니다. 이 경우, 회사는 이용자에게 그러한 사실을 통지하며, 이용자가 위와 같은 이벤트 등을
                        이용하고자 할 경우 추가적인 또는 별도의 이용 조건, 규칙 및/또는 정책에 의한 적용을 받을 수 있음에 동의합니다.
                    </p>

                    <h2>11. 제안</h2>
                    <p>
                        회사가 요청하지 않은 제안 및 아이디어는 거절하는 것은 회사의 방침입니다. 요청하지 않은 제안 및 아이디어에 대한 회사의 정책에도 불구하고, 질의, 피드백, 제안, 아이디어 또는 이용자가
                        회사에 제공한 정보(통칭하여, "제안")는 독점 성이나 기밀성이 없는 것으로 처리될 것입니다. 회사의 개인정보처리방침의 조건에 따라, 이용자가 제공한 정보를 전송하거나 게시함으로써,
                        이용자는 동 제안의 전부 또는 일부를 복제하거나, 그로부터 파생물을 생성하거나, 현재 알려져 있거나 앞으로 개발될 모든 형식, 매체, 기술의 형태로 단독으로 또는 기타 작업물의 일부로서
                        그 제안을 배포하고 전시하거나, 회사의 제품 또는 서비스와 관련하여 또는 그에 포함하여 제안을 사용하는 것을 포함하여 회사가 적절하다고 판단한 어떠한 방식으로 제안을 복제, 사용, 재생,
                        변경, 개조, 번역, 출판, 사용권허여, 배포, 판매 또는 양도할 권리를 부여합니다. 또한 이용자는 이용자의 제안이 반환되지 않으며, 이용자가 제공한 정보 및 동 정보에 포함된 아이디어,
                        컨셉, 노하우 일체에 대하여 회사가 금전 또는 다른 형태의 대가의 지급 없이, 제품의 개발, 제조, 유통 및 마케팅을 포함하나 그에 국한되지 않는 모든 목적으로 사용할 수 있다는 것을
                        인정합니다.

                        이용자가 제안을 한 경우, 이용자는 자신의 제안에 대해 권리를 소유하거나 달리 관리하고 있다는 점을 진술 및 보증합니다. 이용자는 또한 그러한 제안이 소프트웨어 바이러스, 구매요청,
                        연쇄메일, 대량메일, 또는 여타 형태의 “스팸”에 해당하거나 소프트웨어 바이러스 등을 포함하지 않는다는 것을 진술 및 보증합니다.이용자는 허위 이메일 주소를 사용하거나, 허위로 타인인 체
                        하거나, 달리 제안의 출처에 대하여 회사를 기만할 수 없습니다. 이용자는 제안에 관한 권리의 소유권 주장이나 동 정보로부터 발생한 손해와 관련하여, 또는 그로부터 발생하는 모든 청구에
                        대하여 회사를 면책함에 동의합니다.
                    </p>

                    <h2>12. 이용자 컨텐츠</h2>
                    <p>
                        이용자가 자료, 텍스트, 소프트웨어, 음악, 음향자료, 사진, 그래픽, 이미지, 비디오, 메시지, 기타 자료 등("이용자 컨텐츠") 을 본 사이트에서 전송, 업로드, 게시, 이메일 전송
                        또는 달리 이용 가능하도록 할 경우, 이용자는 그와 같은 이용자 컨텐츠에 대해 전적으로 책임을 부담합니다. 이용자 컨텐츠는 위 제10조에 정의된 이용자가 제공한 정보에 해당합니다. 이는
                        회사가 아닌, 모든 이용자가 사이트에 게시하는 모든 이용자 컨텐츠에 대하여 전적으로 책임을 진다는 것을 의미합니다. 이용자는 (a) 불법적이거나, 해롭거나, 위협적이거나, 폭력적이거나,
                        또는 타인의 심기를 불편하게 하거나, 명예훼손적이거나, 천박하거나, 외설적이거나, 비방적이거나, 타인의 사생활을 침해하거나, 혐오스럽거나, 아니면 인종적으로 또는 윤리적으로 반감을
                        불러일으키는 이용자 컨텐츠를 본 사이트에서 전송, 업로드, 게시, 이메일 전송 또는 달리 공개할 수 없고, 다른 사람들이 이러한 컨텐츠를 본 사이트에서 전송, 업로드, 게시, 이메일 전송
                        또는 달리 공개하도록 돕거나 조장할 수 없습니다. (b) 또한 이용자는 법률이나 계약 또는 신뢰 관계상 전술한 성격의 이용자 컨텐츠를 이용 가능하게 할 권리를 가지지 아니하며, (c)
                        회사와 이용자 양자 중 일방의 특허권, 상표권, 영업비밀, 저작권 또는 기타 재산권을 침해하는 이용자 컨텐츠를 본 사이트에서 전송, 업로드, 게시, 이메일 전송 또는 달리 이용 가능하게
                        할 수 없다는 점에 대하여 동의합니다. 또한, 이용자는 연쇄메일, 대량메일 또는 여타 형태의 “스팸”을 포함하여 소프트웨어 바이러스, 원치 않는 광고물이나 승인 받지 않은 광고물,
                        구매요청이나 홍보자료 등을 전송, 업로드, 게시, 이메일 전송 또는 달리 이용 가능하게 할 수 없다는 점에 대하여 동의합니다. 뿐만 아니라, 이용자는 (i) 다른 사람을 허위로
                        대리하거나, 특정인이나 특정 단체와의 관계를 허위로 또는 부정확하게 진술하지 아니하고, (ii) 제3자를 "스토킹”하거나 또는 달리 괴롭히거나, 모함하거나, 해를 끼치지 아니하며,
                        (iii) 이용자 컨텐츠의 출처를 가장하기 위하여 헤더(header)를 위조하거나 식별표시 등을 달리 조작하지 아니하고, (iv) 고의성의 유무를 불문하고 관련 지역, 국가의 법률 또는
                        국제법을 위반하지 아니하며, (v) 다른 이용자에 대하여 개인 식별이 가능한 데이터를 수집하거나 저장하지 아니한다는 점에 대하여 동의합니다.

                        회사는 이용자가 생성하여 사이트에 전송 또는 게시한 컨텐츠를 보증하거나 제어하지 않습니다. 따라서 회사는 이용자 컨텐츠의 정확성, 진실성 또는 품질을 보장하지 않습니다. 이용자는 본
                        사이트를 사용함으로써 이용자에게 불쾌하고 음란하며 반감을 일으킬 수 있는 이용자 컨텐츠에 노출될 수 있다는 점을 양지합니다.어떠한 상황에서도, 회사는 이용자 컨텐츠상 오류나 누락을 포함한
                        일체의 이용자 컨텐츠에 대해서, 또는 본 사이트를 통하여 전송, 업로드, 게시, 이메일 전송 또는 달리 공개된 이용자 컨텐츠를 사용함으로써 이용자에게 발생한 모든 성격의 손실이나 손해에
                        대해서 일체의 책임을 지지 않습니다.

                        이용자는 회사가 회사의 재량으로 이용자 컨텐츠의 게시를 거부하거나 동 컨텐츠를 제거할 수 있는 권리(의무는 아님)를 가짐을 인정합니다. 전술사항이나 본 약관의 여타 조항의 일반성을
                        제한하지 않고, 회사는 본 약관을 위반하거나 달리 반감을 일으키는 이용자 컨텐츠에 대해서는 이를 제거할 수 있는 권리를 지니며, 본 약관을 위반하거나 타인의 권리를 침해하는 이용자에
                        대해서는 서비스의 제공을 거부하거나 또는 서비스의 제공을 거부하고 이용자의 계정을 해지할 권리를 보유합니다. 회사가 이용자의 계정을 해지하는 경우 회사는 이를 이용자에게 통지하고,
                        이용자의 계정을 해지하기 전에 최소한 30일 이상의 기간을 정하여 이용자에게 소명할 기회를 부여합니다.
                    </p>


                    <h2>13. 저작권 관련 불만</h2>
                    <p>
                        회사는 타인의 지적 재산을 존중합니다. 한국의 저작권법에 따라, 저작권 보호를 받는 컨텐츠가 저작권법 위반에 해당하는 방식으로 복제되었다고 판단하는 경우, 이용자는 완전하게 작성된 “재생
                        또는 전송 중단 요청서 ”및 요청된 정보와 백업 자료 일체를 회사의 지정대리인에게 이메일 또는 서면에 의하여 통지하여 주십시오. 저작권법 위반 주장 통지에 관한 회사의 지정대리인은
                        Ateam  백채린 (Baek Chae Rin) 담당자입니다.
                        <br/><br/>
                        명칭: Ateam
                        <br/>
                        주소: 경기 성남시 분당구 돌마로 46 5층 그린컴퓨터아카데미 성남분당점
                        <br/>
                        Tel.: 031-712-7447
                        <br/>
                        담당자: 백채린
                    </p>

                    <h2>14. 진술 및 보증 책임의 제한</h2>
                    <p>
                        본 사이트는 “현 상태 그대로” 제시됩니다. 회사는 법적으로 배제될 수 없는 범위를 제외하고는 상품적합성, 비침해 또는 특정 목적에 대한 적합성에 대한 보증을 포함하여(그러나 이에
                        한정되지 아니합니다) 본 약관이나 본 사이트와 관련하여 어떠한 종류의 명시적 또는 묵시적인 진술이나 보증을 하지 아니합니다.

                        이용자는, 관련 법률이 허용하는 최대 한도까지, 어떠한 상황에서도 회사는 회사의 고의 또는 중과실로 인한 것이 아닌 한 (계약, 불법행위(과실 포함) 및 기타 조건상), (a) 사업장애,
                        (b) 접속 지연 또는 본 사이트에의 접속 장애, (c) 데이터 전송 불가, 전송오류, 데이터 훼손, 파괴 또는 기타 변형, (d) 본 사이트에서의 오프웹사이트 링크 또는 그 링크를
                        처리하는 과정에서 발생한 모든 종류의 손실 또는 손해, (e) 제3자 웹사이트 쪽으로 또는 그로부터 하이퍼링크 연결과정을 포함하여 이용자의 본 사이트 사용과 관련하여 발생할 수 있는
                        컴퓨터 바이러스, 시스템 오류, 또는 오작동, (f) 컨텐츠상 부정확 성이나 누락 또는 (g) 회사의 합리적 관리 범위를 넘어선 사건 일체에 대하여 책임을 부담하지 아니함에 대하여
                        동의합니다.
                        <br/><br/>
                        또한 관련 법률이 허용하는 최대 한도까지, 회사는 손해배상의 가능성에 대해서 사전에 알고 있었다고 할지라도, 계약(일실이익을 포함합니다), 불법행위(과실을 포함합니다) 또는 기타 행위의
                        형태를 불문하고, 회사의 고의 또는 중과실로 인한 것이 아닌 한, 본 사이트 또는 이용자의 본 사이트 사용과 관련한 모든 종류의 간접적, 특별한, 징벌적, 우발적 또는 후속적인 손해에
                        대하여 책임을 지지 아니하며, 어떠한 경우에도 회사의 손해배상 총액은 한화 금 구만원(90,000원)을 초과하지 아니합니다.
                    </p>

                    <h2>15. 면책</h2>
                    <p>
                        이용자는 이용자의 본 사이트 사용이나 본 약관 위반으로부터 기인한 제3자의 청구, 소송 또는 권리주장으로 인한 일체의 손실, 손해, 비용(합리적 범위의 변호사 수임료를 포함합니다)에
                        대하여 회사를 보호하고 면책함에 동의합니다. 이용자는 또한 이용자의 소프트웨어 로봇, 스파이더, 크롤러 또는 그와 유사한 데이터 수집 및 추출 도구를 사용함으로써 발생하거나, 기타회사의
                        기반시설에 불합리한 부담이나 부하를 주는 어떠한 행위를 함으로 인하여 발생하는 일체의 손실, 손해, 비용(합리적 범위의 변호사 수임료를 포함합니다)에 대해 회사에게 배상함에 동의합니다.
                    </p>

                    <h2>16. 분쟁</h2>
                    <p>
                        본 사이트에 관한 일체의 분쟁과 관련하여, 본 약관에 의하여 예상된 이용자의 권리와 의무 및 모든 행위는 대한민국의 법률에 의하여 규율 될 것입니다. 법에 의하여 허용되는 최대 한도
                        내에서, 이용자의 본 사이트 방문과 관련된 모든 분쟁은 이용자의 주소지 소재 법원에 제기되거나, 이용자가 동의할 경우 선택적으로 중재 신청이 제기될 수 있습니다. 이용자는 상기 관할 및
                        절차에 따르되, 다만 예외적으로 회사는 이용자가 회사의 지적재산권이나 회사 계열사, 파트너, 라이센서의 지적재산권을 위반하였거나 위반할 우려가 있는 경우, 또는 형평법상의 소송 사유를
                        가진 경우에는, 관할법원에 금지명령 이나 기타 적절한 구제조치를 청구할 수 있습니다.
                    </p>

                    <h2>17. 사이트 게재 및 이메일을 통한 전자적 통지의 수령에 대한 승낙</h2>
                    <p>
                        이용자는 회사로부터 이메일을 통해서나 본 사이트상 공지를 통해서 본 약관이 언급하는 합의, 통지, 공개사항 및 기타 통신 내용(통칭하여, “통지”)을 수령함에 동의합니다. 이용자는 회사가
                        이용자에게 전자적으로 제공하는 모든 통지는 그러한 통지가 서면으로 이루어져야 한다는 법적 요건을 충족한다는 점에 대하여 동의합니다.
                        <br/>
                        위와 같은 전자적 통지 수령 동의는 마케팅 알림 메시지의 수령에 관한 이용자의 선택권과는 전적으로 별개의 문제임을 유념하시기 바랍니다. 마케팅 알림 메시지의 수령과 관련한 이용자의
                        선택권은 회사의 개인정보처리방침에 설명되어 있습니다.
                    </p>

                    <h2>18. 일반 조항</h2>
                    <p>
                        이용자는 이용자의 본 사이트 사용과 관련하여 본 약관이 회사와 이용자간의 완전하고 배타적인 합의를 구성하며, 이전의 모든 제안, 계약 또는 기타 의견을 대체하고 규율 한다는 점에 대하여
                        인정하고 동의합니다. 회사는 회사의 재량 하에 본 사이트에 수정 사항을 게시함으로써 언제든지 본 약관을 수정할 권리를 가집니다. 수정 사항은 본 사이트에 게시되고 수정 사항에 대한 통지가
                        발송된 후 30일 이후에 효력을 발생합니다. 그 이후의 이용자의 계속적인 본 사이트 이용은 본 약관의 모든 변경된 사항에 대한 동의를 구성합니다. 회사는 약관을 개정할 경우에는 적용일자
                        및 개정사유를 명시하여 그 적용일자 30일 전부터 적용일자 전일까지 본 사이트에 수정 사항을 게시하고 이용자에게 통지하며, 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이
                        개정약관에 동의한 것으로 봅니다.
                        <br /><br/>
                        이용자는 본 사이트의 사용을 모두 중단함으로써, 즉시 모든 해지 또는 관련 통지를 준수하여야 합니다.
                        본 약관에 포함된 어떠한 사항도 회사와 이용자간에 대리관계, 파트너쉽, 또는 기타 형태의 합작기업을 형성하는 것으로 해석될 수 없습니다. 회사가 이용자의 본 약관 조항 이행을 요구하지
                        않는다고 하더라도, 이는 추후 언제라도 이용자의 약관 조항의 이행을 요구할 수 있는 회사의 완전한 권리에 영향을 미치지 못하며, 본 약관 조항의 위반에 대해 회사가 권리를 행사하지 않는
                        것은 해당 조항의 포기로 간주되거나 해석될 수 없습니다. 본 약관의 어떠한 조항이 관련 법률상 이행 불가능하거나 유효하지 않을 경우, 또는 중재판정이나 법원의 판결을 통해 이행
                        불가능하거나 유효하지 않은 것으로 결정될 경우, 그와 같은 이행불가능성이나 무효성은 본 약관 전체의 이행가능성이나 유효성을 박탈할 수 없으나, 본 약관은 재판당국에 의하여 가능한 범위
                        내에서 원 조항에 반영된 바와 같이 당사자들의 원래 의도를 최대한 반영하기 위하여 수정될 수 있습니다.
                        <br /><br/>
                        본 약관과 관련하여 의문사항이 있을 경우, 고객관리지원팀 으로 문의 주시기 바랍니다.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Terms;