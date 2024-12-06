import React from "react";
import m from "./SchedulePageComponents.module.css";
import { Link } from "react-router-dom";

const ScheduleCard = ({
  backColor,
  circleColor,
  type,
  name,
  teacher,
  place,
  groups,
  time,
  key,
}) => {
  return (
    <div className={m.card}>
      <div className={m.container}>
        <div
          className={m.circle}
          style={{ backgroundColor: circleColor }}
        ></div>
        <div className={m.lessonType} style={{ backgroundColor: backColor }}>
          – {type}: {time}
        </div>
      </div>

      <div className={m.name}>{name}</div>

      <div className={m.teacher}>
        Преподаватель:{" "}
        <Link className={m.link} href="#">
          {teacher}
        </Link>
      </div>

      <div className={m.location}>Локация: {place}</div>

      <div className={m.group}>
        Группа(ы):
        {groups.map((group) => (
          <Link className={m.link} href="#">
            {", "}
            {group}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
