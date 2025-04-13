import h from "../styles/Homework.module.css";
import Comments from "./Comments";

const Homework = () => {
  const lessons = [
    {
      name: "Конструирование узлов и элементов биотехнических систем",
      comments: ["Так, я не понял"],
    },
    {
      name: "Метрология, стандартизация и технические измерения",
      comments: ["Ку, чо задачи?"],
    },
    { name: "Политология", comments: ["Хе-хе, ну, я уже всё сделал"] },
    {
      name: "Иностранный язык",
      comments: ["Завтра пойду без домашки, мне вообще вофиг", 'Шо по парам, пацаны?', "Кто куда, а я сваливаю!"],
    },
    {
      name: "Философия",
      comments: ["А по этому предмету экзамен или что?"],
    },
  ];

  return (
    <div className={h.homeworkContainer}>
      <h2 className={h.title}>Домашка</h2>

      <h3 className={h.comments}>Последние комментарии</h3>

      {lessons.map((lesson) => (
        <Comments lesson={lesson} />
      ))}
    </div>
  );
};

export default Homework;
