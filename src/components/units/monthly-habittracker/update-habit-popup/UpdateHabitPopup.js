import styled from '@emotion/styled'
import { useEffect, useState } from 'react';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import axios from 'axios';
import { userState, InputValue } from '../../../../components/stores';
import Input from '../../../commons/inputs/Inputs.container';



// ============================== Style  ==============================
const PopupBackground = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 0;
background: rgba(0, 0, 0, 0.8);
`

const PopupContainer = styled.div`
width: 428px;
box-sizing: border-box;
padding: 40px 24px 40px 24px;
border-radius: 24px;
background-color: var(--color-white);
display: flex;
flex-direction: column;
/* box-shadow: 3px 3px 3px 3px black; */

position: absolute;
top: calc(50vh - (240px / 2));
left: calc(50vw - (428px / 2));


`

const PopupTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
margin-bottom: 24px;
color: var(--color-black1);
`

const PopupContent = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 32px;
`

const PopupBtnContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 8px;
`

export default function UpdateHabitPopup(props) {

    // ============================== Function  ==============================

    // --- 초기설정
    useEffect(() => {
        setNewInput({ ["habitName"]: props.selectedHabitName })
    }, [])


    //  ----- Axios put(update) -- 습관이름 수정하기
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const updateHabitData = async () => {

        if (accessToken) {
            const response = await axios.put(`https://api.habiters.store/habits/${props.habitId}`, {
                "content": newInput["habitName"]
            }, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            return
        }
    }




    // --- 습관이름 수정하기
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const updateHabit = async () => {
        if (!newInput["habitName"] || newInput["habitName"].trim().length == 0) {
            // alert("내용을 입력해주세요");
            setIsError(true)
            setErrorMessage("습관 이름을 작성해주세요")
            return
        }
        if (newInput["habitName"].length > 10) {
            // alert("습관 이름은 10자 이내만 가능합니다")
            setIsError(true)
            setErrorMessage("습관 이름은 10자 이내로만 작성 가능해요.")
            return
        }
        else {
            await updateHabitData()
            setNewInput(() => '')
            props.getUserHabit();
            props.updateHabitPopupClose();
        }
    }



    // --- input
    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";
    const [newInput, setNewInput] = useRecoilState(InputValue)
    const { habitName } = newInput;


    const onChange = (e) => {
        const { value, name } = e.target;
        setNewInput({ ...newInput, [name]: value })
        setIsError(false)
    }





    // ----- habit 유효성 검사

    const habitInputCheck = () => {
        // console.log(nickName.toString().length)
        if (!habitName) {
            // alert("내용을 입력해주세요");
            setIsError(true)
            setErrorMessage("습관 이름을 작성해주세요")
            return
        }
        if (habitName.length > 10) {
            // alert("습관 이름은 10자 이내만 가능합니다")
            setIsError(true)
            setErrorMessage("습관 이름은 10자 이내로만 작성 가능해요.")
            return
        }
        else {
            setIsError(false)
            setErrorMessage("")
        }

    }

    useEffect(() => {
        habitInputCheck()
    }, [habitName])











    // --- 팝업창 닫기
    function updateHabitPopupClose() {
        setNewInput('')
        props.updateHabitPopupClose();
    }

    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">습관 이름 수정</span>
                        <span className="icon-l icon-close-line"
                            onClick={updateHabitPopupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>
                            <Input
                                name="habitName"
                                value={habitName}
                                placeholder={placeholder}
                                onChange={onChange}

                                isError={isError}
                                errorMessage={errorMessage}
                            />
                        </div>
                    </PopupContent>

                    <PopupBtnContainer>
                        <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={updateHabitPopupClose}>취소하기</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={updateHabit}>수정완료</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}