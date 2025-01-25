import { useDate } from "@/shared/hooks/useDate";
import m from "./Card.module.css";
import { Link } from "react-router-dom";
import { setColor } from "../model/setColor";

const ScheduleCard = ({ dayOfWeek, date, lessons }) => {
  const lessonDate = useDate(date) 

  if (Array.isArray(lessons) && lessons.length === 0) {
    return (
      <div className={m.card}>
        <h4 className={m.cardName}>{dayOfWeek}</h4>
        <div className={m.lessonNameContainer}>
          <div className={m.typeWrapper}>
            <div
              className={m.circle}
              style={{ backgroundColor: "white" }}
            ></div>
            <div className={m.name}>Пар нет!</div>
          </div>
          <div className={m.lessonTime}>Весь день</div>
        </div>
      </div>
    );
  }
  return (
    <div className={m.card}>
      <h4 className={m.cardName}>{dayOfWeek} - {lessonDate}</h4>
      {lessons.map((lesson) => {
        const backColor = setColor(lesson.type);
        const circleColor = setColor(lesson.type);

        return (
          <div className={m.container}>
            <div className={m.lessonNameContainer}>
              <div className={m.typeWrapper}>
                <div
                  className={m.circle}
                  style={{ backgroundColor: circleColor.circle }}
                ></div>
                <div
                  className={m.lessonType}
                  style={{ backgroundColor: backColor.back }}
                >
                  – {lesson.type}
                </div>
              </div>
              <div className={m.lessonTime}>{lesson.time}</div>
            </div>

            <div className={m.name}>{lesson.name}</div>

            <div className={m.teacher}>
              Преподаватель:{" "}
              <Link className={m.link} href="#">
                {lesson.teacher}
              </Link>
            </div>

            <div className={m.location}>Локация: {lesson.place}</div>

            <div className={m.group}>
              Группа(ы):{" "}
              {lesson.groups.map((group) => (
                <Link className={m.link} href="#">
                  {group}{" "}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleCard;