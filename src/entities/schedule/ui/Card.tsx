import m from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
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
        <div className={m.typeWrapper}>
          <div
            className={m.circle}
            style={{ backgroundColor: circleColor }}
          ></div>
          <div className={m.lessonType} style={{ backgroundColor: backColor }}>
            – {type}
          </div>
        </div>
        <div className={m.lessonTime}>{time}</div>
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

export default Card;
