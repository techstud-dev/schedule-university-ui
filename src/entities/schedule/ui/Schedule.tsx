import { useEffect, useState } from "react";
import s from "./Dashboard.module.scss";
import { parity, useSchedule } from "@/shared/hooks/useSchedule";
import Dashboard from "./Dashboard";
import ScheduleList from "./ScheduleList";
import { useLazyGetEvenWeekSchedulesQuery, useLazyGetOddWeekSchedulesQuery } from "../api/scheduleAPI";


const Schedule = () => {
  const [viewMode, setViewMode] = useState("week");
  const [weekViewMode, setWeekViewMode] = useState<parity>("even");
  const [schedule, setSchedule] = useState([]);

  const userDay = new Date().getDay();
  
  const lessonsData = useSchedule(schedule, weekViewMode);

  const [fetchOddWeek, {isError: isOddError, isLoading: isOddLoading}] = useLazyGetOddWeekSchedulesQuery();
  const [fetchEvenWeek, {isError: isEvenError, isLoading: isEventLoading}] = useLazyGetEvenWeekSchedulesQuery();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [oddWeek, evenWeek] = await Promise.all([
          fetchOddWeek().unwrap(),
          fetchEvenWeek().unwrap(),
        ]);

        setSchedule([...oddWeek, ...evenWeek]);
      } catch (error) {
        console.error("Ошибка загрузки расписания:", error);
      }
    };

    fetchData();
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
    <div className={s.wrapper}>
      {(isOddError || isEvenError) && <h2 className={s.error}>Произошла ошибка ^_^</h2>}

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
          isScheduleLoading={isOddLoading || isEventLoading}
        />
      ) : (
        <ScheduleList
          mon={lessonsData[0]}
          tue={lessonsData[1]}
          wed={lessonsData[2]}
          thu={lessonsData[3]}
          fri={lessonsData[4]}
          sat={lessonsData[5]}
          sun={lessonsData[6]}
          userDay={userDay}
          isScheduleLoading={isOddLoading || isEventLoading}
        />
      )}
    </div>
  );
};

export default Schedule;
