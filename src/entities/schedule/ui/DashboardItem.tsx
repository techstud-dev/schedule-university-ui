import { useDate } from "@/shared/hooks/useDate";
import d from "./Dashboard.module.scss";
import { dayOfWeek, Lesson } from "@/shared/hooks/useSchedule";

interface DashboardItem {
  dayOfWeek: dayOfWeek;
  date: number;
  lessons: Lesson[];
}

const DashboardItem = ({ dayOfWeek, date, lessons }: DashboardItem) => {
  let counter = 1;
  const lessonDate = useDate(date) 

  if (Array.isArray(lessons) && lessons.length === 0) {
    return (
      <div className={d.day}>
        <div className={d.day_name}>
          {dayOfWeek}
        </div>
        <ul className={d.task_list}>
          <li className={d.task_item} style={{ textAlign: "center" }}>
            {"--- "}
            {"Пар нет!"}
            {" ---"}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={d.day}>
      <div className={d.day_name}>
        {dayOfWeek} - {lessonDate}
      </div>
      <ul className={d.task_list}>
        {lessons.map((lesson) => (
          <li className={d.task_item}>
            {counter++}
            {") "}
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardItem;