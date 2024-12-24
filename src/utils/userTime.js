import lesson from "../redux/redux_store";

export const findDay = (inputDay) => {
  let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const userDay = new Date().getDay();

  const currentDayName = daysOfWeek[userDay];
  console.log(inputDay);
  
  let result = "";
  
  if (inputDay == currentDayName) {
      result = currentDayName;
    }
    
      console.log(result);
  return result;
};
