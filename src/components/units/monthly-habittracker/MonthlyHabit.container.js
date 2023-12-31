import { useState, useEffect, useCallback } from "react"
import { useRecoilState, useRecoilValue, atom } from 'recoil';
import MonthlyHabitTrackerUI from "./MonthlyHabit.presenter"
import AddNewHabitPopup from './addnewHabitPopup/AddNewHabitPopup';
import UpdateHabitPopup from './update-habit-popup/UpdateHabitPopup';
import DeleteHabitPopup from './delete-habit-popup/DeleteHabitpopup';
import Popup1Btn from '../popup-1btn';

import { userHabitState, userHabitStateThisMonth, userState } from '../../../components/stores';
import axios from "axios";



export default function MonthlyHabitTracker(props) {


    const [habits, setHabits] = useRecoilState(userHabitState)
    const [accessToken, setAccessToken] = useRecoilState(userState)
    useEffect(() => {
        getUserHabit()
    }, [props.showDate])


    // --- Axios get--- 유저의 habit 목록 get 
    const getUserHabit = async () => {
        if (accessToken) {
            // console.log("토큰" + props.showDate.showMonth)
            const response = await axios.get(`https://api.habiters.store/habits?date=${props.showDate.showYear}-${props.showDate.showMonth}`, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            setHabits(() => response.data.data)

        }

        return
    }

   

    const [habitsThisMonth, setHabitsThisMonth] = useRecoilState(userHabitStateThisMonth);

    const getUserHabitThisMonth = async () => {

        const todayYear = new Date().getFullYear()
        const Month = new Date().getMonth() + 1
        const todayMonth = ("00" + (Number(Month))).slice(-2)


        if (accessToken) {
            // console.log("토큰" + props.showDate.showMonth)
            const response = await axios.get(`https://api.habiters.store/habits?date=${todayYear}-${todayMonth}`, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            setHabitsThisMonth(() => response.data.data)

        }

        return
    }

    useEffect(()=>{
        getUserHabitThisMonth()
    },[])





    // --- 습관 추가하기
    const [isaddNewHabitPopupOn, setIsaddNewHabitPopupOn] = useState(false)

    function addNewHabitPopupOn() {
        setIsaddNewHabitPopupOn(true)
    }
    function addNewHabitPopupClose() {
        setIsaddNewHabitPopupOn(false)
    }



    const [habitId, setHabitId] = useState()
    const [selectedHabitName, setSelectedHabitName] = useState()

    // --- 습관이름 수정하기
    const [isUpdateHabitPopupOn, setIsUpdateHabitPopupOn] = useState(false)

    function updateHabitPopupOn(habitId, habitname) {
        setHabitId(() => habitId)
        setSelectedHabitName(() => habitname)
        setIsUpdateHabitPopupOn(true);
    }
    function updateHabitPopupClose() {
        setIsUpdateHabitPopupOn(false)
    }


    // --- 습관 삭제하기
    const [isDeleteHabitPopupOn, setIsDeleteHabitPopupOn] = useState(false);

    function deleteHabitPopupOn(habitId) {
        setHabitId(() => habitId)
        setIsDeleteHabitPopupOn(true)
    }
    function deleteHabitPopupClose() {
        setIsDeleteHabitPopupOn(false)
    }




    // ----습관이 없을 때
    const [isHabitNull, setIsHabitNull] = useState(false)

    useEffect(() => {
        if (habits.length === 0) {
            setIsHabitNull(true)
        }
        else {
            setIsHabitNull(false)
        }

    }, [habits])




    // --- 날짜 선택
    const todayDate = new Date()
    const [year, setYear] = useState(todayDate.getFullYear());
    const [month, setMonth] = useState(todayDate.getMonth() + 1);
    const [date, setDate] = useState(todayDate.getDate());
    const today = year + "-" + month + "-" + date;




    const [selectedDate, setSelectedDate] = useState(today)





    const dateSelect = (date) => {
        setDate(date)
    }

    // ------- 당일습관 팝업
    const [isHabitAlertOn, setIsHabitAlertOn] = useState(false)
    const [popupMessage, setPopupMessage] = useState('')

    const HabitAlertPopupOn = (props) => {
        setPopupMessage(props)
        setIsHabitAlertOn(true)
    }

    const HabitAlertPopupClose = () => {
        setIsHabitAlertOn(false)
    }


   


    return (
        <>



            <MonthlyHabitTrackerUI
                addNewHabitPopupOn={addNewHabitPopupOn}
                updateHabitPopupOn={updateHabitPopupOn}
                deleteHabitPopupOn={deleteHabitPopupOn}
                HabitAlertPopupOn={HabitAlertPopupOn}


                showDate={props.showDate}
                monthDown={props.monthDown}
                monthUp={props.monthUp}

                habits={habits}
                // setHabits={setHabits}
                isHabitNull={isHabitNull}


                selected={dateSelect}
                selectedDate={selectedDate}


                moveToThisMonth={props.moveToThisMonth}


                getUserHabit={getUserHabit}
                getUserHabitThisMonth={getUserHabitThisMonth}
            />



            {isaddNewHabitPopupOn && <AddNewHabitPopup
                addNewHabitPopupClose={addNewHabitPopupClose}
                getUserHabit={getUserHabit}
            />}

            {isUpdateHabitPopupOn && <UpdateHabitPopup
                updateHabitPopupClose={updateHabitPopupClose}
                selectedHabitName={selectedHabitName}
                habitId={habitId}
                getUserHabit={getUserHabit}
            />}

            {isDeleteHabitPopupOn && <DeleteHabitPopup
                deleteHabitPopupClose={deleteHabitPopupClose}
                habitId={habitId}
                getUserHabit={getUserHabit}
            />}

            {isHabitAlertOn && <Popup1Btn
                HabitAlertPopupClose={HabitAlertPopupClose}
                popupMessage={popupMessage}
            />}
        </>


    )

}