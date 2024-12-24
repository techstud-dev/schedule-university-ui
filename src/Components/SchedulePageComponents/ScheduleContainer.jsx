import ScheduleCard from "./ScheduleCard";
import { timeDeterminant } from "../../utils/time";
import { useState } from "react";
import ScheduleService from "../../API/ScheduleService";
import { useFetching } from "../../hooks/useFetching";
import ScheduleListElements from "./ScheduleListElemenst";
import lesson from '../../redux/redux_store'
import { lessonSlice } from "../../redux/lesson_reducer";

export const setColor = (type) => {
  const backgroundColor = {
    lecture: "#A8E0B8",
    practice: "#ADD8E6",
    lab: "#ed8ddb",
    exam: "#5a56c5",
    offset: "#64636e",
    consultation: "#78ecc9",
    other: "#FFD700",
  };

  const circleColors = {
    lecture: "#00f646",
    practice: "#00bfff",
    lab: "#ff00d0",
    exam: "#0800ff",
    offset: "#38383f",
    consultation: "#00ffb3",
    other: "#ffd900",
  };

  switch (type) {
    case "Лекция":
      return { back: backgroundColor.lecture, circle: circleColors.lecture };
    case "Практика":
      return { back: backgroundColor.practice, circle: circleColors.practice };
    case "Лабораторная":
      return { back: backgroundColor.lab, circle: circleColors.lab };
    case "Экзамен":
      return { back: backgroundColor.exam, circle: circleColors.exam };
    case "Зачёт":
      return { back: backgroundColor.offset, circle: circleColors.offset };
    case "Консультация":
      return {
        back: backgroundColor.consultation,
        circle: circleColors.consultation,
      };
    default:
      return { back: backgroundColor.other, circle: circleColors.other };
  }
};

const ScheduleContainer = () => {
  const getbasicWeek = lesson.getState();
  const [lessons, setLessons] = useState(getbasicWeek.lesson);


  const userDay = new Date().getDay()
  
  const [fetchSchedule, isScheduleLoading, scheduleError] = useFetching(
    async () => {
      const response = await ScheduleService.getDefaultSchedule();
      console.log(response)
      setLessons({ response });
    }
  );

  // let newLessons = [];
  // for (let i = 0; i < lessons.length; i++) {
  //   newLessons[i] = { ...lessons[i] };
  //   const timeConverter = timeDeterminant(newLessons[i].time);
  //   const result = timeConverter();

  //   newLessons[i].convertedTime = result;
  // }

  // let userTimeZone;

  for (let i = 0; i < lessons.length; i++) {
    if (lessons[i].convertedTime) {
    }
  }

  return (
    <div>
      {scheduleError && <h4>Случилась ошибка ^_^</h4>}

      {isScheduleLoading ? (
        <div>
          <p>Загрузка...</p>
          <p>Пожалуйста подождите XD</p>
        </div>
      ) : (
        <ScheduleListElements lessons={lessons} userDay={userDay} />
      )}
    </div>
  );
};

export default ScheduleContainer;
