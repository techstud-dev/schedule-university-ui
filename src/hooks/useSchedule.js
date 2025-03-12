export const useSchedule = (schedule, value) => {
  const newSchedule = [];

  let monday = { dayOfWeek: "Пн", date: 0, lessons: [] },
    tuesday = { dayOfWeek: "Вт", date: 0, lessons: [] },
    wednesday = { dayOfWeek: "Ср", date: 0, lessons: [] },
    thursday = { dayOfWeek: "Чт", date: 0, lessons: [] },
    friday = { dayOfWeek: "Пт", date: 0, lessons: [] },
    saturday = { dayOfWeek: "Сб", date: 0, lessons: [] },
    sunday = { dayOfWeek: "Вс", date: 0, lessons: [] };

  for (let i = 0; i < schedule.length; i++) {
    if (value === "even" && schedule[i].isEven === true) {
      newSchedule.push(schedule[i]);
    }
    if (value === "odd" && schedule[i].isEven === false) {
      newSchedule.push(schedule[i]);
    }
  }

  for (let i = 0; i < newSchedule.length; i++) {
    switch (newSchedule[i].dayOfWeek) {
      case "Понедельник":
        monday.date = newSchedule[i].date;
        monday.lessons.push(newSchedule[i]);
        break;
      case "Вторник":
        tuesday.date = newSchedule[i].date;
        tuesday.lessons.push(newSchedule[i]);
        break;
      case "Среда":
        wednesday.date = newSchedule[i].date;
        wednesday.lessons.push(newSchedule[i]);
        break;
      case "Четверг":
        thursday.date = newSchedule[i].date;
        thursday.lessons.push(newSchedule[i]);
        break;
      case "Пятница":
        friday.date = newSchedule[i].date;
        friday.lessons.push(newSchedule[i]);
        break;
      case "Суббота":
        saturday.date = newSchedule[i].date;
        saturday.lessons.push(newSchedule[i]);
        break;
      case "Воскресенье":
        sunday.date = newSchedule[i].date;
        sunday.lessons.push(newSchedule[i]);
        break;
      default:
        break;
    }
  }
  
  return [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  ];
};
