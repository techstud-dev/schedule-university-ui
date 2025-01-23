interface Lesson {
  id: string;
  dayOfWeek: string;
  date: number;
  time: string;
  type: string;
  name: string;
  teacher: string;
  place: string;
  groups: string[];
  isEven: boolean;
  _links: object;
}

export const useSchedule = (schedule: Lesson[], value: "even" | "odd") => {
  const newSchedule: Lesson[] = [];

  const weekDays = {
    monday: { dayOfWeek: "Пн", date: 0, lessons: [] as Lesson[] },
    tuesday: { dayOfWeek: "Вт", date: 0, lessons: [] as Lesson[] },
    wednesday: { dayOfWeek: "Ср", date: 0, lessons: [] as Lesson[] },
    thursday: { dayOfWeek: "Чт", date: 0, lessons: [] as Lesson[] },
    friday: { dayOfWeek: "Пт", date: 0, lessons: [] as Lesson[] },
    saturday: { dayOfWeek: "Сб", date: 0, lessons: [] as Lesson[] },
    sunday: { dayOfWeek: "Вс", date: 0, lessons: [] as Lesson[] },
  };

  for (let i = 0; i < schedule.length; i++) {
    if (
      (value === "even" && schedule[i].isEven) ||
      (value === "odd" && !schedule[i].isEven)
    ) {
      newSchedule.push(schedule[i]);
    }
  }

  for (let i = 0; i < newSchedule.length; i++) {
    switch (newSchedule[i].dayOfWeek) {
      case "Понедельник":
        weekDays.monday.date = newSchedule[i].date;
        weekDays.monday.lessons.push(newSchedule[i]);
        break;
      case "Вторник":
        weekDays.tuesday.date = newSchedule[i].date;
        weekDays.tuesday.lessons.push(newSchedule[i]);
        break;
      case "Среда":
        weekDays.wednesday.date = newSchedule[i].date;
        weekDays.wednesday.lessons.push(newSchedule[i]);
        break;
      case "Четверг":
        weekDays.thursday.date = newSchedule[i].date;
        weekDays.thursday.lessons.push(newSchedule[i]);
        break;
      case "Пятница":
        weekDays.friday.date = newSchedule[i].date;
        weekDays.friday.lessons.push(newSchedule[i]);
        break;
      case "Суббота":
        weekDays.saturday.date = newSchedule[i].date;
        weekDays.saturday.lessons.push(newSchedule[i]);
        break;
      case "Воскресенье":
        weekDays.sunday.date = newSchedule[i].date;
        weekDays.sunday.lessons.push(newSchedule[i]);
        break;
      default:
        break;
    }
  }

  return Object.values(weekDays);
};
