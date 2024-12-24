import React, { useState } from "react";
import d from "./Dashboard.module.css";
import DashboardList from "./DashboardList";

// Функция для форматирования даты
const formatDate = (date) => {
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Компонент для отображения дня
const Day = ({ date }) => {
  return (
    <div className="day">
      {formatDate(date)}
      {/* Здесь вы можете добавить логику отображения расписания для этого дня */}
    </div>
  );
};

// Основной компонент дашборда
const Dashboard = () => {
  const [viewMode, setViewMode] = useState("week");
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleViewChange = (event) => {
    const { value } = event.target;
    switch (value) {
      case "0":
        setViewMode("week");
        break;
      case "1":
        setViewMode("month");
        break;
      case "2":
        setViewMode("day");
        break;
      default:
        setViewMode("week");
    }
  };

  const getWeekDays = () => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + 1); // устанавливаем начало недели
    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }

    return days;
  };

  const getMonthDays = () => {
    const start = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const end = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const days = [];

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    return days;
  };

  const renderDays = () => {
    const days = viewMode === "week" ? getWeekDays() : getMonthDays();

    return days.map((date) => <Day key={date.toISOString()} date={date} />);
  };

  return (
    <div className="dashboard">
      <div className={d.custom_select} data-label="Выберите вариант">
        <select onChange={handleViewChange} className={d.select_items} >
          <option value="0">Неделя</option>
          <option value="1">Месяц</option>
          <option value="1">День</option>
        </select>
      </div>
      <div className={d.container}>
        <div className={d.week}>
          {/* <div className={d.day}>
            <div className={d.day_name}>Понедельник</div>
            <ul className={d.task_list}>
              <li>Задача 1</li>
              <li>Задача 2</li>
            </ul>
            <button className={d.details_button}>Подробнее</button>
          </div> */}
          <DashboardList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
