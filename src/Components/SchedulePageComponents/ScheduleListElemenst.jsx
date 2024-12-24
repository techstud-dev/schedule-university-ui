import { useEffect } from "react";
import ScheduleCard from "./ScheduleCard";
import { setColor } from "./ScheduleContainer";

const ScheduleListElements = ({ userDay, lessons }) => {
  if (lessons === undefined) {
    return <div>Случилась ошибка ^_^</div>;
  }

  return (
    <div>
      {lessons.map((lesson) => {
        const resultBackColor = setColor(lesson.type);
        const resultCircleColor = setColor(lesson.type);
        
        return (
          <ScheduleCard
            key={lesson.id}
            id={lesson.id}
            time={lesson.time}
            type={lesson.type}
            name={lesson.name}
            teacher={lesson.teacher}
            place={lesson.place}
            groups={lesson.groups}
            backColor={resultBackColor.back}
            circleColor={resultCircleColor.circle}
          />
        );
      })}
    </div>
  );
};

export default ScheduleListElements;
