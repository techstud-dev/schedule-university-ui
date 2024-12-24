
import d from "./Dashboard.module.css";

const DashboardItem = (lessons) => {
      
  return (
    <div className="container">
      <div className={d.day}>
        <div className={d.day_name}>{lessons.dayOfWeek}</div>
        {/* <ul className={d.task_list}>
            {lessons.map((lessonName) => (
                <li>{lessonName}</li>
            ))}
        </ul>    */}
        <button className={d.details_button}>Подробнее</button>
      </div>
    </div>
  );
};

export default DashboardItem;
