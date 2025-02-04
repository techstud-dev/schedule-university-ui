import Card from "./Card";
import { Dashboard } from "./Dashboard";

interface ScheduleList extends Dashboard {
  userDay: unknown
}

const ScheduleList = ({
  userDay,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
}: ScheduleList) => {
  return (
        <>
          <Card dayOfWeek={mon.dayOfWeek} date={mon.date} lessons={mon.lessons} />
          <Card dayOfWeek={tue.dayOfWeek} date={tue.date} lessons={tue.lessons} />
          <Card dayOfWeek={wed.dayOfWeek} date={wed.date} lessons={wed.lessons} />
          <Card dayOfWeek={thu.dayOfWeek} date={thu.date} lessons={thu.lessons} />
          <Card dayOfWeek={fri.dayOfWeek} date={fri.date} lessons={fri.lessons} />
          <Card dayOfWeek={sat.dayOfWeek} date={sat.date} lessons={sat.lessons} />
          <Card dayOfWeek={sun.dayOfWeek} date={sun.date} lessons={sun.lessons} />
        </>
  );
};

export default ScheduleList;