import { useState } from "react";
import s from "./Dashboard.module.scss";
import { parity, useSchedule } from "@/shared/hooks/useSchedule";
import Dashboard from "./Dashboard";
import ScheduleList from "./ScheduleList";
import { useGetWeekSchedulesQuery } from "../api/scheduleAPI";
import Loader from "@/shared/ui/loader/Loader";


const Schedule = () => {
  const [viewMode, setViewMode] = useState("week");
  const [weekViewMode, setWeekViewMode] = useState<parity>("even");

  const userDay = new Date().getDay();

  const { data: schedule, isLoading, isError } = useGetWeekSchedulesQuery();

  if (isLoading) {
    return <Loader />
  }

  const lessonsData = useSchedule(schedule ?? [], weekViewMode);

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
      {(isError) && <h2 className={s.error}>Произошла ошибка ^_^</h2>}

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
        />
      )}
    </div>
  );
};

export default Schedule;
