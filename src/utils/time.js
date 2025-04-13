import { DateTime } from "luxon";

export const timeDeterminant = (time) => {
  // Исходная строка времени
  const timeRange = time;

  // Разделим строку на два времени
  const [startTime, endTime] = timeRange.split(" - ");

  // Функция для преобразования времени в минуты с начала дня
  const timeToMinutes = () => {
    let start = startTime;
    let end = endTime;
    const [startHours, startMinutes] = start.split(":");
    const [endHours, endMinutes] = end.split(":");
    const resultStart = parseInt(startHours) * 60 + parseInt(startMinutes);
    const resultEnd = parseInt(endHours) * 60 + parseInt(endMinutes);

    return {
        startTime: resultStart,
        endTime: resultEnd
    }
  };
  
  return timeToMinutes;
};

export const parseTime = (timeRange) => {
  const [startTime, endTime] = timeRange.split(" - ");

  const now = DateTime.local();
  const timeZone = now.zoneName;

  const startDateTime = DateTime.fromFormat(
    `${now.toFormat("yyyy-MM-dd")} ${startTime}`,
    "yyyy-MM-dd HH:mm",
    { zone: timeZone }
  );

  const endDateTime = DateTime.fromFormat(
    `${now.toFormat("yyyy-MM-dd")} ${endTime}`,
    "yyyy-MM-dd HH:mm",
    { zone: timeZone }
  );

  const options = { hour: "numeric", minute: "numeric", hour12: false }; // Формат 24 часа
  return {
    start: startDateTime.setZone(timeZone).toLocaleString(options),
    end: endDateTime.setZone(timeZone).toLocaleString(options)
  };
};

export const convertTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60; 
    return `${hours} часов и ${minutes} минут`;
}