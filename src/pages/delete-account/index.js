import styled from '@emotion/styled'
import { useRouter } from "next/router"
import Textarea from "../../components/commons/textareas/Textareas.container"

export default function DeleteAccount() {

    // -----------------스타일

    const Main = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    `

    const Title = styled.div`
     padding: 72px 0 32px 0;
    `

    const SubTitle = styled.div`
     padding-bottom: 48px;
    `
    const DeleteAccountNoticeWrap = styled.div`
    width: 580px;
    height: 202px;
    box-sizing: border-box;
    background-color: var(--color-black9);
    border-radius: 16px;
    padding: 24px 24px;
    `

    const DeleteAccountNotice = styled.div`
     display: flex;
    flex-direction: column;
    padding-top: 16px;
    gap: 8px;
    `
    const Notice = styled.div`
    &::before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--color-purple2);
    margin-right: 8px;}
    `


    const DeleteAccountTextarea = styled(Textarea)`
        margin: 24px 0 56px 0;
        width: 580px;
        height: 172px;
    
    `

    //---------함수
    const router = useRouter()
    const onClickMoveMainPage = () => {
        router.push("/")
    }
    const onClickUpdateImg = () => {
        //    이미지 로드
        alert("파일로드창!")
    }

    const placeholder = "탈퇴 사유를 입력해주세요. (선택적)"
    const textareaErrorMessage = "";



    return (
        <>
            <main>

                <Main>

                    <Title className={'headline1 color-black1'}>HABITERS 탈퇴 안내</Title>
                    <SubTitle className={'headline4 color-black2'}>그 동안 HABITERS와 함께한 시간들, 유익하셨나요?</SubTitle>
                    <DeleteAccountNoticeWrap>
                        <div className={'body1-bold color-black2'}>‘HABITERS'를 탈퇴하기 전에 확인해주세요. </div>
                        <DeleteAccountNotice className={'body2-regular color-black2'}>
                            <Notice>탈퇴가 완료되면 개인정보 및 모든 기록은 즉시 파기되며 복구가 불가해요. </Notice>
                            <Notice>기록을 남기고 싶으시면 탈퇴 전 엑셀 파일을 다운받아 주세요.</Notice>
                            <Notice>추가 문의 사항은 해비터스 개인정보관리팀에 연락주세요.</Notice>
                            <div>   (메일주소)</div>
                        </DeleteAccountNotice>
                    </DeleteAccountNoticeWrap>

                    <Textarea  
                    width={`580px`}
                    margin={`24px 0 56px 0`}
                    height={`172px`}
                    placeholder={placeholder}
                    textareaErrorMessage={textareaErrorMessage}/>

                    <div className={'btn btn-large btn-primary-default body2-medium'} onClick={onClickMoveMainPage}>탈퇴하기</div>

                </Main>



            </main>
        </>

    )
}