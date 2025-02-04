import d from "./Dashboard.module.scss";
import DashboardItem from "./DashboardItem";
import { weekDay } from "@/shared/hooks/useSchedule";

type dayOfWeekEn = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface Dashboard extends Record<dayOfWeekEn, weekDay> {}

const Dashboard = ({
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
}: Dashboard) => {
  return (
        <>
          <div className={d.week}>
            <DashboardItem dayOfWeek={mon.dayOfWeek} date={mon.date} lessons={mon.lessons} />
            <DashboardItem dayOfWeek={tue.dayOfWeek} date={tue.date} lessons={tue.lessons} />
            <DashboardItem dayOfWeek={wed.dayOfWeek} date={wed.date} lessons={wed.lessons} />
            <DashboardItem dayOfWeek={thu.dayOfWeek} date={thu.date} lessons={thu.lessons} />
            <DashboardItem dayOfWeek={fri.dayOfWeek} date={fri.date} lessons={fri.lessons} />
            <DashboardItem dayOfWeek={sat.dayOfWeek} date={sat.date} lessons={sat.lessons} />
            <DashboardItem dayOfWeek={sun.dayOfWeek} date={sun.date} lessons={sun.lessons} />
          </div>
        </>
  );
};

export default Dashboard;