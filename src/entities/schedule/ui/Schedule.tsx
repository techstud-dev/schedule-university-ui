import { setColor } from "../model/setColor";
import Card from "./Card";
 
const Schedule = () => {
  const lessons = [
    {
      id: 1,
      time: "08:30 - 10:05",
      date: '01.12.2024',
      type: "Лекция",
      name: "Конструирование узлов и элементов биотехнических систем",
      teacher: "Шамаев Дмитрий Михайлович",
      place: "201х",
      groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
    },
    {
      id: 2,
      time: "15:40 - 17:15",
      type: "Практика",
      name: "Политология",
      teacher: "Шалдунова Татьяна Николаевна",
      place: "203х",
      groups: ["БМТ2-52Б"],
    },
    {
      id: 3,
      time: "08:30 - 10:05",
      type: "Другое",
      name: "ВУЦ",
      groups: ["БМТ2-52Б"],
    },
  ];

  return (
    <div className="Main">
      <h1>Расписание занятий</h1>
      <div>
      {lessons.map((lesson) => {
        const resultBackColor = setColor(lesson.type);
        const resultCircleColor = setColor(lesson.type);

        return (
          <Card
            key={lesson.id}
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
    </div>
  );
}

export default Schedule;