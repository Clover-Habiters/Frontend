import footerStyle from '../../../../styles/footer.module.css'
// ../../../../../styles/header.module.css
import { FooterWrap,FooterContent,  LogoBox, MainLogo, FooterDetailBox, FooterDetail, Bar } from './Footer.styles'


export default function FooterUI(props) {


    return (
        // html 부분을 여기에 담아라
        <>

            <footer>

                <FooterWrap>
                    <FooterContent>

                        <div>
                            <img className={footerStyle.main_logo} src="/image/logo-habiters.svg" alt="Logo" />
                        </div>
                        <FooterDetailBox>

                            <FooterDetail className="body3-regular color-black3">
                                <span><a onClick={props.onClickMoveIntroService}>서비스 소개</a></span> <Bar />
                                <span><a onClick={props.onClickMoveIntroTermsOfUse}>이용약관</a></span> <Bar />
                                <span><a onClick={props.onClickMoveIntroPrivacyPolicy}>개인정보 처리방침</a></span> <Bar />
                                <span><a onClick={props.onClickMoveIntroTeam}>팀소개</a></span>
                            </FooterDetail>
                            <div className="body3-regular color-black3">
                                © 2023 TEAM CLOVER🍀, All rights reserved.
                            </div>
                        </FooterDetailBox>
                    </FooterContent>

                </FooterWrap>

            </footer >
        </>
    )

}