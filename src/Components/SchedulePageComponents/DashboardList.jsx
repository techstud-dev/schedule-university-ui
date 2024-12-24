import DashboardItem from "./DashboardItem";
import lesson from "../../redux/redux_store";
import { findDay } from "../../utils/userTime";
import { useState } from "react";

const DashboardList = () => {
  const getLessons = lesson.getState().lesson;
  const [lessons, setLessons] = useState([])
  for (let i = 0; i < getLessons.length; i++) {
    
    
  }

//   for (let i = 0; i < getLessons.length; i++) {
//     let lessonsArr = [];
//     switch (getLessons[i].dayOfWeek) {
//       case "Понедельник":
//         lessonsArr.push(getLessons[i]);
//         continue
//       case "Вторник":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       case "Среда":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       case "Четверг":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       case "Пятница":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       case "Суббота":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       case "Воскресенье":
//         lessonsArr.push(getLessons[i]);
//         continue;
//       default:
//         break;
//     }
//     console.log(lessonsArr);
//     return <DashboardItem lessons={lessonsArr[i]} />;
//   }

  // let lessonsNames = []
  // let lessonDay;
  // for (let i = 0; i < getbasicWeek.length; i++) {
  //   const lessonName = getbasicWeek[i].name;
  //   lessonDay = getbasicWeek[i].dayOfWeek;
  //   lessonsNames.push(lessonName);

  // }
  // const dayOfWeek = findDay(lessonDay);

  // console.log(dayOfWeek)

  return <div>{/* <DashboardItem lessonsNames={lesson.name} /> */}</div>;
};

export default DashboardList;
