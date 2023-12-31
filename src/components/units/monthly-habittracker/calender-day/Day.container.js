import { useEffect, useRef, useState } from "react"
import CalenderDayUI from "./Day.presenter"
import { useRecoilState } from "recoil";
import { SelectedDate } from '../../../../components/stores';



export default function CalenderDay(props) {

    const [isSelected, setIsSelected] = useState(false);
    const [nowSelectedDate, setNowSelectedDate] = useRecoilState(SelectedDate)


    const onClickDayHandler = async (e) => {
        // ----- 선택한 날짜 Recoil에 저장
        //------ 날짜 선택 시 해당 날짜의 색 변경, 일별확인 해당 날짜의 일별 확인으로 변경( QA : 당일 제외 날짜 체크 불가 )
    
        // setNowSelectedDate(("00" + (Number(props.date))).slice(-2))
        // props.selected(props.date)
    }


    // ----- 최초 렌더링 오늘 날짜 선택됨
    useEffect(() => {
        // console.log(props.selectedDate)

        if (props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date === props.selectedDate) {

            setIsSelected(true)
        }

    }, [])

    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const Month = nowDate.getMonth() + 1
    const todayMonth = ("00" + (Number(Month))).slice(-2)
  


    // ----- 선택한 날짜만 색깔
    useEffect(() => {
       

        if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date === year + "-" + todayMonth+ "-" + nowSelectedDate) ||
            (props.showDate.showYear + "-" + props.showDate.showMonth + "-0" + props.date === year + "-" + todayMonth + "-" + nowSelectedDate)) {
            // if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date === props.showDate.showYear + "-" + props.showDate.showMonth + "-" + nowSelectedDate) ||
            // (props.showDate.showYear + "-" + props.showDate.showMonth + "-0" + props.date === todayprops.showDate.showYearYear + "-" + props.showDate.showMonth + "-" + nowSelectedDate) ) {
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }

        
    })









    return (


        <CalenderDayUI
            HabitAlertPopupOn={props.HabitAlertPopupOn}
            isSelected={isSelected}
            selected={props.selected}
            habits={props.habits}


            showDate={props.showDate}
            day={props.day}
            date={props.date}
            onClickDayHandler={onClickDayHandler}



            getUserHabit={props.getUserHabit}

        />


    )

}