import React, { useEffect, useState } from "react";
import s from "./styles/ScheduleMain.module.css";
import ScheduleService from "../../API/ScheduleService";
import { useSchedule } from "../../hooks/useSchedule";
import Dashboard from "./DashboardComponenst/Dashboard";
import { useFetching } from "../../hooks/useFetching";
import ScheduleList from "./CardsComponents/ScheduleList";
import Homework from "./HomeworkComponents/Homework";
import MyCalendar from "./Calendar";
// import { useDate } from "../../hooks/useDate";
// import lesson from "../../redux/redux_store";

const ScheduleMain = () => {
  // const [lessons, setLessons] = useState(lesson.getState().lesson);
  const [viewMode, setViewMode] = useState("week");
  const [weekViewMode, setWeekViewMode] = useState("even");
  const [schedule, setSchedule] = useState([]);

  const userDay = new Date().getDay();

  const lessonsData = useSchedule(schedule, weekViewMode);
  // const date = useDate(lessonsData);

  const [fetchSchedule, isScheduleLoading, scheduleError] = useFetching(
    async () => {
      const response = await ScheduleService.getDefaultSchedule();
      setSchedule(response);
    }
  );

  useEffect(() => {
    fetchSchedule();
  }, []);

  const handleViewChange = (e) => {
    if (viewMode === "week") {
      setViewMode("day");
    } else {
      setViewMode("week");
    }
  };
  const handleWeekViewChange = (e) => {
    if (weekViewMode === "even") {
      setWeekViewMode("odd");
    } else {
      setWeekViewMode("even");
    }
  };

  return (
    <div>
    <div className={s.wrapper}>
      {scheduleError && <h2 className={s.error}>Произошла ошибка ^_^</h2>}

      <button className={s.toggleBtn} onClick={(e) => handleViewChange(e)}>
        {viewMode === "week" ? "Неделя" : "День"}
      </button>
      <button className={s.toggleBtn} onClick={(e) => handleWeekViewChange(e)}>
        {weekViewMode === "even" ? "Чётная" : "Нечётная"}
      </button>

      {viewMode === "week" ? (
        <Dashboard
          mon={lessonsData[0]}
          tue={lessonsData[1]}
          wed={lessonsData[2]}
          thu={lessonsData[3]}
          fri={lessonsData[4]}
          sat={lessonsData[5]}
          sun={lessonsData[6]}
          userDay={userDay}
          isScheduleLoading={isScheduleLoading}
        />
      ) : (
        <div className={s.cardContainer}>
          <ScheduleList
            mon={lessonsData[0]}
            tue={lessonsData[1]}
            wed={lessonsData[2]}
            thu={lessonsData[3]}
            fri={lessonsData[4]}
            sat={lessonsData[5]}
            sun={lessonsData[6]}
            userDay={userDay}
            isScheduleLoading={isScheduleLoading}
          />
          <Homework />
        </div>
      )}
      </div>
    </div>
  );
};

export default ScheduleMain;
