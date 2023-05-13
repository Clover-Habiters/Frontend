import styled from '@emotion/styled'


export default function IntroTermsOfusePage() {

    // -----------------스타일

    const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    `


    // -----1page
    const TermsOfUseWrap = styled.div`
    width: 1180px;
    & > :last-child{
        padding: 80px 0 200px 0;
    }
    `

    const TermsOfUseTitle = styled.div`
     padding: 72px 0 32px 0;
    `

    const TermsOfUseSubTitle = styled.div`
    padding: 24px 0 8px 0;
    `





    return (
        <>
            <main>
                <Container>

                    <TermsOfUseWrap className={'body3-regular color-black1'}>
                        <TermsOfUseTitle className={'headline1 color-black1'}>이용약관</TermsOfUseTitle>
                        <div>본 이용약관(“본 약관”)은 TEAM CLOVER🍀 (이하 “회사” 라고 합니다)가 제공하는 HAVITERS 서비스(“서비스”)에서 업로드, 다운로드되거나 서비스상에 표시되는
                            일체의
                            정보,
                            텍스트, 그래픽, 사진 또는 기타 자료의 사용에 대하여 규율하고자 합니다.
                            본 약관에 동의하지 않으면 서비스를 이용할 수 없으므로 본 약관의 내용을 주의 깊게 살펴봐 주시기 바랍니다. 귀하는 서비스 사용에 앞서 본 약관을 확인하고 이해하고 이에 동의해야
                            합니다.
                            귀하께서 본 이용약관을 확인하고 동의하신 후 서비스를 이용할 수 있습니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>1. 회사와의 계약</TermsOfUseSubTitle>
                        <div>1)귀하는 본 서비스의 이용과 관련하여 대한민국법의 적용을 받는 것에 동의합니다.<br /><br />
                            2)귀하가 회사에 제공하는 정보 일체에 대하여 회사의 정보 수집 및 이용을 규율하는 회사의 개인정보 처리방침이 적용됩니다. 귀하는 서비스를 이용함으로써 해당 정보의 대한민국
                            및/또는 기타
                            국가
                            내 보관, 처리 및 이용을 위한 전송을 포함하여, (개인정보 처리방침에 기술된 바에 따른) 회사의 정보 수집 및 이용에 동의합니다. 서비스 제공의 일환으로 회사는 서비스 공지 및
                            관리
                            메시지와
                            같은 특정 커뮤니케이션을 발송할 수 있으며, 이러한 커뮤니케이션은 서비스 및 귀하의 서비스 계정의 일부로 간주되며, 그 수신을 거부할 수 없습니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>2. 개인정보보호</TermsOfUseSubTitle>
                        <div>회사는 서비스의 원활한 제공을 위하여 회원이 동의한 목적과 범위 내에서만 개인정보를 수집.이용하며, 개인정보 보호 관련 법령에 따라 안전하게 관리합니다. 회사가 이용자 및 회원에
                            대해
                            관련
                            개인정보를 안전하게 처리하기 위하여 기울이는 노력이나 기타 상세한 사항은 개인정보처리방침에서 확인하실 수 있습니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>3. 사용자 콘텐츠</TermsOfUseSubTitle>
                        <div>본 서비스는 사용자가 링크, 사진, 동영상, 텍스트, 그래픽, 물품 또는 기타 자료를 포함하나 이에 국한되지 않는 콘텐츠(총칭하여 “사용자 콘텐츠”)를 창작, 게시, 전송
                            및/또는
                            저장할 수 있도록 하는 양방향 기능 및 요소로 구성됩니다.<br />
                            귀하는 서비스 일체를 이용함으로써 발생하는 모든 데이터 사용료에 대한 책임이 있음을 이해합니다.<br />
                            또한 귀하는 귀하의 사용자 콘텐츠를 타인이 열람할 수 있으며 개인정보보호 설정의 조정을 통해 콘텐츠에 대한 접근을 제한할 수 있음을 이해합니다.<br />
                            또한, 귀하는 수시로 갱신될 수 있는 회사의 커뮤니티 가이드라인을 준수하는 데에 동의합니다.<br />
                            귀하는 귀하의 사용자 콘텐츠 및 그로부터 발생하는 청구에 대하여 전적인 책임을 부담하며 회사는 어떠한 사용자 콘텐츠 또는 그로부터 발생하는 청구에 대해서도 책임 또는 법적 책임을
                            부담하지
                            않는 데에 동의합니다. <br />
                            회사는 어느 때라도 이유를 불문하고 사용자 콘텐츠를 검토, 확인 및 삭제할 권리와 완전한 재량을 보유하는 한편, 그에 대한 의무를 지지는 않습니다.<br />
                            귀하는 귀하의 사용자 콘텐츠에 대한 소유권 일체를 보유합니다.<br />
                            그러나 사용자 콘텐츠를 회사에 제출함으로써 귀하는 알려지지 않았거나 추후 개발되는 것을 포함한 모든 매체 또는 배포 방법을 이용하여 그러한 사용자 콘텐츠를 이용, 재현, 변경,
                            각색,
                            편집, 출판, 2차 저작물 제작, 배포, 공연, 홍보, 전시 및 진열할 수 있는, 취소 불가능하고 비독점적인, 전세계적, 영구적, 무상의(royalty-free), 2차 라이선스
                            부여 및 양도
                            가능한 라이선스(“사용자 콘텐츠 라이선스”)를 회사에 부여하며, 여기에 귀하가 사용자 콘텐츠 열람 권한 보유자를 제한하기 위하여 결정한 개인정보보호 설정이 적용됩니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>4. 커뮤니티 가이드라인</TermsOfUseSubTitle>
                        <div>회사가 이러한 규칙을 설정하여 달성하고자 하는 목표는 서비스 사용자가 서비스를 안전하고 즐겁게 사용할 수 있도록 하는 한편, 광범위한 자기 표현이 조화롭게 수용될 수 있도록 하는
                            것입니다.<br />
                            불쾌감을 유발하는 댓글은 작성되지 않도록 하여 주시고, 댓글 입력 내용과 작성 대상에 대해서는 신중을 기하여 주시기 바랍니다. 누군가가 스크린샷을 찍는 것은 문제없으나, 이것이
                            귀하 또는 귀하의 친구들의 입장을 대신할 수는 없습니다. 회사는 스크린샷을 탐지하여 발신인에게 통지하고자 하지만 완벽하게 동작하지 않을 수 있습니다. 또한 언제든지 카메라를 이용한 이미지 캡처도
                            가능합니다.<br />
                            서비스를 합법적으로 사용하여 주시기 바랍니다. 서비스를 어떠한 불법적 용도로도 사용되는 일이 없도록 하여 주시길 바랍니다.<br />
                            {"  "} • 작성할 수 없는 게시물 및 댓글:<br />
                            {"  "} {"  "} {"  "} • 성인물, 미성년자(19세 미만)를 포함하는 나체 노출 또는 성적인 콘텐츠, 미성년자를 포함한 신체적으로 위험하거나 유해한 행위, 사생활 침해, 위협, 모욕 또는 괴롭힘, 사칭,
                            자해, 기타 타인에게 불쾌감을 주거나 법에서 금지하고 있는 내용<br />
                            또한 제공되는 콘텐츠는 HABITERS의 개인 정보 활용 방침과 이용 약관의 규정을 따르며, 내부적인 기준을 통해 엄격히 관리되고 있습니다. 위 규정을 위반할 경우 콘텐츠 삭제,
                            계정 정지 및 향후 서비스 이용 금지 조치가 취해질 수 있습니다. 이러한 규정을 존중하고 그 취지에 맞게 준수해 주십시오. 이 규정들은 서비스 사용자 커뮤니티와 함께 변경 및 진화됩니다.회사는
                            일관적이고 공정하게 규정을 적용하도록 노력할 것이며 궁극적으로 각 상황에서 회사의 재량에 따라 최선이라고 판단되는 조치를 취할 것입니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>5. 피드백</TermsOfUseSubTitle>
                        <div>귀하가 회사 또는 서비스에 관하여 이메일 또는 그 외 방식으로 회사에 제공하는 피드백, 제안, 아이디어 또는 기타 정보나 자료(“피드백”)는 비밀정보가 아니며 회사의 고유
                            재산임에  동의합니다.<br />
                            회사는 귀하에게 통지나 보상을 제공함이 없이 상업성 여부를 불문한 어떠한 목적으로든 그러한 피드백을 무제한적으로 이용하거나 전파할 권리를 보유합니다.<br />
                            귀하는 피드백에 관하여 가질 수 있는 권리(저작권 또는 저작인격권 포함) 일체를 포기하거나 회사에 주장하지 않는 것에 동의합니다.<br />
                            회사는 사용자의 의견을 환영하나, 보상을 원하거나 그에 관한 소유권 또는 청구권을 지속적으로 보유하고자 하는 경우에는 회사와 아이디어를 공유하지 않으시기 바랍니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>6. 콘텐츠</TermsOfUseSubTitle>
                        <div>회사의 이용자에게 다양하고 풍부한 콘텐츠(검색, 알람 기능)를 제공하기 위해 노력하고 있으며, HABITERS 서비스의 특성 상 이러한 컨텐츠 중 일부는 타인의 게시물 또는
                            창작물의 일부를 인용할 수 있습니다.<br />
                            HABITERS는 사용자가 등록하지 않은 어떠한 정보도 기록하고 있지 않으며, 달리 명시되지 않는 한, 사용자가 서비스에서 작성한 텍스트, 그래픽, 이미지,
                            코드, 삽화, 디자인, 아이콘, 사진, 동영상과 서면 및 기타 자료를 포함하나 이에 국한되지 않는 서비스에 포함된 모든 자료(총칭하여 “HABITERS 콘텐츠”)와 그 선정 및 배열은 저작권,
                            상표권, 디자인권, 트레이드 드레스, 특허 및/또는 기타 지적재산 관련 법의 보호를 받습니다. <br />
                            HABITERS 콘텐츠의 무단 사용은 그러한 법 및 본 약관에 위배될 수 있습니다. 본 약관에
                            명시적으로 규정된 경우를 제외하고, 회사는 HABITERS 콘텐츠 사용에 대한 명시적이거나 묵시적인 권리를 부여하지 않습니다. <br />
                            귀하는 본 약관에서 명시적으로 기술된 경우를 제외하고, HABITERS 콘텐츠, 서비스 또는 관련 소프트웨어의 전부 또는 일부를 복제, 재현, 전재, 프레임 삽입, 다운로드, 전송, 변경, 전시, 역설계, 매도, 매도 참여, 대여, 임대, 대출,
                            양도, 배포, 허가, 재허가하거나 어떠한 방식으로든 활용하지 않는 데에 동의합니다.<br />
                            귀하는 이로써 서비스 및 HABITERS 콘텐츠에 접근하고 이를 이용할 제한적이고 비독점적이며 재허락(Sub-license)가 불가능한 라이선스를 부여 받습니다.<br />
                            이 라이선스는 언제라도 취소 가능하고 본 약관의 적용을 받으며 다음을 포함하지 않습니다.<br />
                            HABITERS 콘텐츠 사용 회사의 사전 서면 허가 없이 본 약관에서 구체적으로 허용되는 것 이외의 서비스 또는 HABITERS 콘텐츠 사용은 엄격히 금지되며 그러한 경우 본 약관에 따른 서비스 이용이
                            제한됩니다.
                        </div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>7. 금지된 활동</TermsOfUseSubTitle>
                        <div>본 약관에 기술된 다른 제한사항에 더하여, 다음의 행위는 금지됩니다.<br /><br />

                            {"  "} • 불법적이거나, 본래 용도의 범위에서 벗어나거나, 본 약관 또는 특정 서비스를 규율하는 제3자 약관에서 달리 금지된 목적을 위해 서비스를 이용하는 행위<br />
                            {"  "} • 다른 사용자가 서비스를 완전하게 이용하는 데에 방해, 지장, 부정적 영향 또는 제약을 초래할 수 있는 방식 또는 서비스 기능에 훼손, 비활성화, 과도한 부담 또는 손상을 초래할 수
                            있는 방식으로 서비스를 이용하는 행위<br />
                            {"  "} • 서비스의 보안을 훼손하는 행위<br />
                            {"  "} • 요청되거나 허용되지 않은 광고, 스팸, 권유 또는 홍보 자료를 발송하는 행위<br />
                            {"  "} • 서비스에 접근하거나 데이터를 추출하기 위하여 로봇(robot), 스파이더(spider), 크롤러(crawler), 스크레이퍼(scraper) 또는 기타 회사가 제공하지 않는 자동화
                            수단 또는 인터페이스를 사용하는 행위<br />
                            {"  "} • 서비스의 어느 측면을 역설계하거나, 서비스의 소스코드를 발견하거나 어느 분야, 콘텐츠 또는 코드에의 접근을 방지 또는 제한하기 위해 활용된 조치를 우회하는 행위-<br />
                            {"  "} • 다른 사용자 계정을 무단으로 사용하거나 또는 사용을 시도하는 행위<br />
                            {"  "} • 회사 콘텐츠 필터링 기술의 우회를 시도하거나 또는 접근 권한이 없는 서비스 분야 또는 기능에의 접근을 시도하는 행위<br />
                            {"  "} • 회사의 명시적인 서면 동의 없이 어떠한 방식으로든 회사와 관계가 있다거나 제품 또는 서비스를 회사가 보증한다고 암시하려는 시도<br />
                            {"  "} • 모욕, 위협, 공격 또는 스토킹 행위<br />
                            {"  "} • 특정인 또는 기관을 사칭하거나 특정인 또는 기관과의 관계를 달리 허위진술하는 행위<br />
                            {"  "} • 타인의 사진을 촬영하는 것을 포함하여, 동의 없이 초상권, 사생활 권리 또는 정보보호 권리를 침해하는 행위<br />
                            {"  "} • 특허, 상표권, 영업비밀, 저작권 또는 기타 지적재산권 또는 재산적 권리를 침해하는 행위<br />
                            {"  "} • 서비스 계정, 메시지, 서비스 사용자명 또는 친구 링크를 서비스의 사전 서면 동의 없이 매수, 매도, 대여, 임대 또는 기타 대가를 받고 제공하는 행위<br />
                            {"  "} • 회사의 사전 서면 동의 없이 사용자 콘텐츠 또는 서비스와 상호작용하는 제3자 어플리케이션을 개발하는 행위<br />
                            {"  "} • 불법이거나 허용되지 않은 목적으로 서비스를 이용하거나 본 약관에 위배되는 활동에 관여하거나 그러한 활동을 장려 또는 촉진하는 행위<br /><br />

                            또한 귀하는 서비스 또는 서비스 후기 게시에 적용되는 APPLE App Store 서비스 약관과 Android Market 서비스 약관을 포함한 제3자 약관을 준수하는 데에
                            동의합니다.<br />
                            앱스토어 후기에 서비스 사용자명을 게시하는 것은 엄격히 금지되며 서비스 계정이 삭제될 수 있습니다.</div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>8. 서비스 사용 허가</TermsOfUseSubTitle>
                        <div>회사는 귀하에게 서비스의 일환으로 제공한 소프트웨어를 사용할 수 있는 개인적이고 전세계적이며 무상의(royalty-free) 양도 불가능하며 비독점적인 라이선스를 부여합니다.<br />
                            이 라이선스는 회사가 제공하는 서비스의 혜택을 본 약관에서 허용된 방식에 따라 이용하고 즐길 수 있게 하기 위한 목적으로 부여됩니다.<br />
                            1) 계정 정보 : 서비스를 이용하기 위해서는 회사에 계정을 개설해야 합니다. 귀하는 로그인 정보를 안전하게 보호할 책임이 있으며 귀하의 계정을 통해 발생하는 모든 활동과 관련하여
                            회사에
                            대해
                            책임을 부담합니다.</div>
                        <TermsOfUseSubTitle className={'headline5 color-black2'}>9. 회사의 권리</TermsOfUseSubTitle>

                        <div>서비스(사용자가 제공하는 콘텐츠 제외)에 관한 모든 권리, 소유권 및 이익은 회사 및 그 라이선스 허가자의 독점적 재산입니다.<br />
                            서비스는 국내 및 그 외 국가의 저작권, 상표권 및 기타 법의 보호를 받습니다.<br />
                            본 약관의 어떠한 내용도 회사 및 서비스의 상호 또는 저작권, 로고, 도메인명, 기타 고유의 브랜드를 이용할 권리를 귀하에게 부여하지 않습니다.<br />
                            회사 또는 서비스에 관하여 귀하가 제공할 수 있는 일체의 피드백, 의견 또는 제안은 전적으로 자발적인 것이며 회사는 그러한 피드백, 의견 또는 제안을 회사가 적합하다고 판단하는
                            바에 따라 귀하에 대한 어떠한 의무도 부담하지 않고 이용할 수 있습니다.</div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>10. 저작권 정책</TermsOfUseSubTitle>
                        <div>회사는 타인의 지식재산권을 존중하며 서비스 사용자도 그러할 것을 기대합니다.<br />
                            회사는 저작권 침해 혐의에 대하여 관련 법에 따라 적절하게 통지된 것에 응답할 것입니다.<br />
                            귀하의 콘텐츠가 저작권 침해에 해당하는 방식으로 복제되었다고 판단되는 경우, 귀하는 저작권법 등 관련 법에 따라 서비스 내에 콘텐츠 삭제, 비공개 등의 관리기능이 제공되는 경우
                            이를 통해 직접 타인의 이용 또는 접근을 통제할 수 있고, 고객센터를 통해서도 콘텐츠의 삭제, 비공개, 검색결과 제외 등의 조치를 요청할 수 있습니다.<br />
                            다만, 일부 서비스의 경우 삭제, 비공개 등의 처리가 어려울 수 있으며, 이러한 내용은 각 서비스 상의 안내 등에서 확인해 주시길 부탁 드립니다.<br />
                            회사는 회사의 전적인 재량으로 침해가 의심되는 콘텐츠를 사전 통지 없이 삭제할 권한을 가지며 이 경우 귀하에 대한 책임을 부담하지 않습니다.<br />
                            또한 회사는 상황에 따라 반복적으로 지적재산권을 침해하는 것으로 판단되는 사용자의 계정을 정지합니다.</div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>11. 보증 없음</TermsOfUseSubTitle>
                        <div>1)귀하는 서비스에 접근하거나 서비스를 이용함으로써 모욕적이거나 외설적이거나 기타 불쾌한 것으로 간주되는 타인의 자료에 노출될 수 있음을 인정하고 이에 동의하며, 그러한 위험을
                            감수하는 데에 동의합니다.<br />
                            회사의 서비스를 통해 표현되는 견해는 반드시 회사의 견해를 대표하지는 않습니다.<br />
                            회사는 귀하 또는 다른 사용자가 게시한 특정 콘텐츠를 찬성하거나 지지하지 않습니다.<br />
                            제 3자로부터의 특정 콘텐츠는 부정확하게 분류, 등급 표시 또는 구분될 수 있습니다.<br /><br />

                            2)회사는 콘텐츠 보호를 위해 가능한 보안 조치를 제공할 것이나 콘텐츠의 공개로 인해 초래되는 손해에 대한 책임을 지지 않습니다.<br /><br />

                            3)보증 없음: 귀하는 관련 법에서 허용되는 최대 한도에서 서비스 및 자료가 어떠한 유형의 명시적, 묵시적, 법정 또는 기타 보증 없이 “있는 그대로” 귀하에게 제공됨을 명시적으로
                            이해하고 이에 동의합니다.<br />
                            예를 들어, 회사는
                            (a) 서비스 또는 자료가 귀하의 필요조건을 충족하거나 계속해서 이용 가능하고, 차단되지 않고, 시의적절하고, 안전하고, 오류가 없고,<br />
                            (b) 사이트, 서비스 또는 자료의 이용에서 취득되는 결과는 유효하거나 정확하거나 신뢰할 수 있으며,<br />
                            (c) 사이트, 서비스 또는 자료의 오류나 결함은 수정될 것이라는 보증을 제공하지 않습니다.</div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>12.회사의 책임 제한법에 의하여 금지되는 경우를 제외하고, 어떠한 경우에도 회사 또는 회사 측 당사자는 회사가
                            그러한 손해의 발생 가능성을 통지 받았다고 하더라도</TermsOfUseSubTitle>
                        <div>(a) 서비스의 사용 또는 사용 불능,<br />
                            (b) 서비스 또는 서비스 내에서 이용 가능한 자료의 제공, 또는<br />
                            (c) 서비스의 다른 사용자의 행동에 의하여 초래되는 간접적, 특별, 징벌적, 부수적, 징계적 또는 결과적 손해에 대한 책임을 지지 않습니다. 귀하는 귀하의 서비스 이용에 대하여
                            전적인 책임을 부담합니다.<br />
                            서비스 또는 콘텐츠 일체에 대하여 불만족할 경우 귀하의 유일한 구제 수단은 서비스의 이용 중단입니다. 일부 지역에서는 책임 제한을 허용하지 않으므로 귀하에게는 상기 내용이 적용되지
                            않을 수도 있습니다.</div>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>13. 회사와의 분쟁 해결귀하와 회사 간의 분쟁은 서면으로 달리 합의하는 경우를 제외하고 대한민국에 재판 관할이
                            있습니다.</TermsOfUseSubTitle>

                        <TermsOfUseSubTitle className={'headline5 color-black2'}>14. 해지</TermsOfUseSubTitle>
                        <div>1)귀하는 언제든지 서비스의 이용을 중단할 수 있습니다.<br /><br />

                            2)회사는 서비스 기능을 추가, 변경 또는 제거할 수 있으며 서비스를 중단 또는 중지할 수 있습니다. 또한 회사는 귀하에 대한 서비스 제공을 중단하거나 어느 때라도 서비스에 대한
                            제한을 추가하거나 새로운 제한을 설정할 수 있습니다.<br /><br />

                            3)해지 전에 귀하가 서비스를 위하여 또는 이와 관련하여 지불한 수수료가 있는 경우, 그러한 수수료는 관련 법령에서 정한 내용에 따라 환불됩니다. 다만, 환불을 청구하지 않고
                            해지를 하는 경우 관련 기록 삭제 등으로 인해 환불에 어려움이 발생할 수 있으니 해지 전 필요한 환불 절차를 모두 이행하여 주시기를 부탁드립니다. 또한, 계정 해지 시에도 이미 발생한 지불 의무는
                            면제되지는 않습니다.<br /><br />

                            4)서비스가 해지되거나 중단되는 경우, 회사는 이를 통지하고 콘텐츠 회수 기회를 제공하기 위하여 합리적인 노력을 합니다. 귀하의 그룹 관리자가 서비스에 대한 귀하의 접근을 종료하는
                            경우, 귀하 또는 그룹의 다른 구성원이 공유된 작업 그룹이나 공유된 작업 공간에 게시한 콘텐츠에 더 이상 접근할 수 없습니다.</div>


                        <TermsOfUseSubTitle className={'headline5 color-black2'}>15. 일반 조항</TermsOfUseSubTitle>
                        <div>수출 규제 : 귀하는 서비스와 귀하의 서비스 이용 및 취급이 서비스 및 HABITERS 콘텐츠의 수입, 수출 및 이용을 규율하는 국내법 및 국제법, 제한 및 규정의 적용을 받음을
                            인정합니다.<br />
                            귀하는 그러한 모든 법, 제한 및 규정을 준수하는 데에 동의합니다.<br />
                            국문본 : 본 계약의 해석에는 본 계약 국문본이 이용됩니다.<br />
                            가분성 : 법원이 본 약관의 일부를 무효 또는 집행 불능으로 판단할 경우 본 약관의 나머지 부분은 계속해서 적용됩니다.<br />
                            권리 포기 없음 : 회사가 귀하에 대하여 본 약관을 집행하지 않을 경우 (또는 집행을 지연하는 경우), 회사가 집행의 권리를 포기한 것으로 간주되지 않습니다.<br />
                            양도 또는 이전 : 귀하는 본 계약에 따른 권리 또는 의무를 회사의 서면 허가 없이 제3자에게 양도하거나 이전할 수 없습니다. 회사는 (회사의 인수합병, 서비스 일부 매각 등의
                            경우) 귀하의 허가 없이 귀하에 대한 권리 및 의무를 이전할 수 있습니다.<br />
                            완전한 합의 : 본 약관은 서비스에 관하여 회사와 귀하 간의 완전하고 배타적인 합의를 구성하며, 서비스와 관련된 회사와 귀하 간의 모든 기존 합의는 효력이 없습니다. 회사는 수시로
                            본 약관을 변경할 수 있습니다. 약관을 개정할 경우, 적용일자와 변경내용 및 사유를 명시하여 그 적용일자 7일 전부터 ‘서비스’를 통해 공지합니다. 다만, 그 변경내용이 법적으로 귀하에게
                            불리한 것일 경우, 그 적용일자 30일 이전부터 동일한 내용을 ‘서비스’를 통해 공지할 뿐만 아니라, 해당 내용을 귀하의 이메일 등으로 개별적으로 통지합니다. 귀하는 변경되는 약관에 동의하지
                            않을 경우 본 약관을 통해 체결되었던 ‘서비스’에 대한 이용계약을 해지하고 ‘서비스’ 이용을 중단할 수 있습니다. 회사가 약관의 개정을 공지 또는 통지하면서 적용일자 이전에 거부 의사를 표시하지
                            않으면 개정 약관에 동의한 것으로 본다는 뜻을 함께 공지 또는 통지하였음에도 불구하고 귀하가 명시적으로 거절의 의사표시를 하지 않는 경우 귀하는 개정 약관에 동의한 것으로 봅니다.</div>



                        <div>
                            1. 본 약관은 대한민국 이용자를 대상으로 적용하며, 미국 기타 다른 국가에서 ‘서비스’를 이용하는 이용자에 대해서는 해당국가에서 게시 혹은 보여지는 약관이 적용됩니다<br />
                            2. 본 약관의 개정 내용은 2023년 04월 01일부터 적용됩니다
                        </div>
                    </TermsOfUseWrap>

                </Container >

            </main >
        </>

    )
}