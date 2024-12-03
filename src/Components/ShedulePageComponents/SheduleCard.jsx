import m from './ShedulePageComponents.module.css';
// import {Link} from "react-router-dom";

const SheduleCard = (props) => {
  return (
    <div className={m.card}>
        <div className={m.lessonType}>
          Тип занятия: {props.lessonType}
        </div>

        {/* <Link className={m.link} href="#"> */}
          <div className={m.teacher}>
            Преподаватель: {props.teacher}
          </div>
        {/* </Link> */}

        <div className={m.location}>
          Локация: {props.location}
        </div>

        {/* <Link className={m.link} href="#"> */}
          <div className={m.group}>
            Группа(ы): {props.group}
          </div>
        {/* </Link> */}
    </div>
  );
};

export default SheduleCard;
