import m from './ShedulePageComponents.module.css';
// import {Link} from "react-router-dom";

const SheduleCard = (lessonType, teacher, location, group) => {
  return (
    <div className={m.card}>
        <div className={m.lessonType}>
          Тип занятия: {lessonType}
        </div>

        {/* <Link className={m.link} href="#"> */}
          <div className={m.teacher}>
            Преподаватель: {teacher}
          </div>
        {/* </Link> */}

        <div className={m.location}>
          Локация: {location}
        </div>

        {/* <Link className={m.link} href="#"> */}
          <div className={m.group}>
            Группа(ы): {group}
          </div>
        {/* </Link> */}
    </div>
  );
};

export default SheduleCard;
