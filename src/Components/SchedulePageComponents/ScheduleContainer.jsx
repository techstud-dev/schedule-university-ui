import ScheduleCard from "./ScheduleCard";

const setColor = (type) => {
  const backgroundColor = {
    lecture: "#A8E0B8",
    practice: "#ADD8E6",
    lab: "#ed8ddb",
    exam: "#5a56c5",
    offset: "#64636e",
    consultation: "#78ecc9",
    other: "#FFD700",
  };

  const circleColors = {
    lecture: "#00f646",
    practice: "#00bfff",
    lab: "#ff00d0",
    exam: "#0800ff",
    offset: "#38383f",
    consultation: "#00ffb3",
    other: "#ffd900",
  };

  switch (type) {
    case "Лекция":
      return { back: backgroundColor.lecture, circle: circleColors.lecture };
    case "Практика":
      return { back: backgroundColor.practice, circle: circleColors.practice };
    case "Лабораторная":
      return { back: backgroundColor.lab, circle: circleColors.lab };
    case "Экзамен":
      return { back: backgroundColor.exam, circle: circleColors.exam };
    case "Зачёт":
      return { back: backgroundColor.offset, circle: circleColors.offset };
    case "Консультация":
      return {
        back: backgroundColor.consultation,
        circle: circleColors.consultation,
      };
    default:
      return { back: backgroundColor.other, circle: circleColors.other };
  }
};

const ScheduleContainer = () => {
  const lessons = [
    {
      id: 1,
      time: "08:30 - 10:05",
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
    <div>
      {lessons.map((lesson) => {
        const resultBackColor = setColor(lesson.type);
        const resultCircleColor = setColor(lesson.type);

        return (
          <ScheduleCard
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
  );
};

export default ScheduleContainer;
