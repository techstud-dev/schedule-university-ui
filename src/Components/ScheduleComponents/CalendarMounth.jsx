import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Базовые стили
import './styles/Custom_calendar_month.css'; // Подключаем стили

function getStartOfWeek(date) {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay(); // Получаем день недели (0 - воскресенье, 1 - понедельник и т.д.)
    const diff = (day === 0 ? 6 : day - 1); // Для понедельника
    startOfWeek.setDate(startOfWeek.getDate() - diff); // Устанавливаем дату на начало недели
    
    return startOfWeek;
}

const CalendarMonth = ({ value, setValue }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setValue(getStartOfWeek(date));
        setSelectedDate(date); // Устанавливаем выбранную дату
        //console.log(getStartOfWeek(date).toISOString().split('T')[0])
    };

    const isSameWeek = (date) => {
        if (!selectedDate) return false;
        const startOfWeek = getStartOfWeek(selectedDate);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(endOfWeek.getDate() + 6); // Конец недели

        return date >= startOfWeek && date <= endOfWeek; // Проверяем, попадает ли дата в выбранную неделю
    };

    const getTileClassName = ({ date }) => {
        if (!isSameWeek(date)) return null;

        const startOfWeek = getStartOfWeek(selectedDate);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(endOfWeek.getDate() + 6); // Конец недели

        if (date.getTime() === startOfWeek.getTime()) {
            return 'highlight-week first-day'; // Первый день недели
        }
        
        if (date.getTime() === endOfWeek.getTime()) {
            return 'highlight-week last-day'; // Последний день недели
        }

        return 'highlight-week'; // Остальные дни недели
    };

    return (
        <div>
            <Calendar 
                onChange={handleDateChange} 
                value={value} 
                tileClassName={getTileClassName} // Применяем класс к ячейкам недели
            />
        </div>
    );
};

export default CalendarMonth;