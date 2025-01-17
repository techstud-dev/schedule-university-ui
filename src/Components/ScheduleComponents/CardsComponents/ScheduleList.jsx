import ScheduleCard from "./ScheduleCard";
import Loader from "../../UI/Loader";

const ScheduleList = ({
  userDay,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
  isScheduleLoading,
}) => {
  return (
    <div>
      {isScheduleLoading ? (
        <Loader />
      ) : (
        <>
          <ScheduleCard dayOfWeek={mon.dayOfWeek} date={mon.date} lessons={mon.lessons} />
          <ScheduleCard dayOfWeek={tue.dayOfWeek} date={tue.date} lessons={tue.lessons} />
          <ScheduleCard dayOfWeek={wed.dayOfWeek} date={wed.date} lessons={wed.lessons} />
          <ScheduleCard dayOfWeek={thu.dayOfWeek} date={thu.date} lessons={thu.lessons} />
          <ScheduleCard dayOfWeek={fri.dayOfWeek} date={fri.date} lessons={fri.lessons} />
          <ScheduleCard dayOfWeek={sat.dayOfWeek} date={sat.date} lessons={sat.lessons} />
          <ScheduleCard dayOfWeek={sun.dayOfWeek} date={sun.date} lessons={sun.lessons} />
        </>
      )}
    </div>
  );
};

export default ScheduleList;
