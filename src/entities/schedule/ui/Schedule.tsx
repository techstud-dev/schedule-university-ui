import { useEffect, useState } from "react";
import s from "./styles/Dashboard.module.css";
import ScheduleService from "../model/ScheduleService";
import { parity, useSchedule } from "@/shared/hooks/useSchedule";
import Dashboard from "./Dashboard";
import { useFetching } from "@/shared/hooks/useFetching";
import ScheduleList from "./ScheduleList";


const Schedule = () => {
  const [viewMode, setViewMode] = useState("week");
  const [weekViewMode, setWeekViewMode] = useState<parity>("even");
  const [schedule, setSchedule] = useState([]);

  const userDay = new Date().getDay();

  const lessonsData = useSchedule(schedule, weekViewMode);

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
          isScheduleLoading={isScheduleLoading}
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
          isScheduleLoading={isScheduleLoading}
        />
      )}
    </div>
  );
};

export default Schedule;
