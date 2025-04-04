import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru'; // Импортируем русскую локализацию
import './styles/Custom-calendar.css';
import c from './styles/Calendar.module.css';
import CalendarMonth from './CalendarMounth';
import LinkAuth from '../LoginComponents/LinkAuth';
import google from "../../assets/icons/Google_Calendar_icon.svg";
import apple from "../../assets/images/Apple_Calendar.png";

const university = 'СПБУ'

function formatDateToGMTPlus0300(date) {
    // Создаем новый объект Date с учетом GMT+0300
    const localDate = new Date(date.getTime() + 3 * 60 * 60 * 1000); // Добавляем 3 часа

    // Получаем компоненты даты
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(localDate.getDate()).padStart(2, '0');

    // Форматируем строку в формате YYYY-MM-DD
    return `${year}-${month}-${day}`;
}


const MyCalendar = () => {
    const [currentWeekStart, setCurrentWeekStart] = useState(new Date()); // Начальная дата для недели
    const [events, setEvents] = useState([]); // Состояние для хранения событий
    const [startDate, setStartDate] = useState(null); // Начальная дата для события

    const handleTimeClick = (arg) => {
        if (!startDate) {
            setStartDate(arg.dateStr); // Устанавливаем начальную дату
            alert('Выберите конечное время для события.');
        } else {
            const endDate = arg.dateStr; // Устанавливаем конечную дату
            
            const title = prompt('Введите название события:');
            if (title) {
                const newEvent = {
                    id: Date.now().toString(), // Генерируем уникальный ID
                    title,
                    start: startDate,
                    end: endDate, // Используем конечную дату
                    allDay: false,
                };
                setEvents((prevEvents) => [...prevEvents, newEvent]); // Добавляем новое событие
            }
            
            // Сбрасываем состояния после добавления события
            setStartDate(null);
        }
        
    };

    useEffect(()=>{
        console.log(events)
    }, [events])

    const handleEventClick = (info) => {
        const action = prompt('Введите "edit" для редактирования или "delete" для удаления события:', 'edit');
        
        if (action === 'edit') {
            const newTitle = prompt('Введите новое название события:', info.event.title);
            if (newTitle) {
                info.event.setProp('title', newTitle); // Изменяем название события
            }
        } else if (action === 'delete') {
            if (window.confirm('Вы уверены, что хотите удалить это событие?')) {
                info.event.remove(); // Удаляем событие
                setEvents((prevEvents) => prevEvents.filter(event => event.id !== info.event.id)); // Обновляем состояние событий
            }
        }
    };

  
    return (
        <section className={c.calendar_wrapper}>
            <div className={c.container_monthCalendar}>
                <h2>Расписание <span>{university}</span></h2>
                <CalendarMonth value={currentWeekStart} setValue={setCurrentWeekStart} />
                <div className={c.button_containerIntagration}>
                    <LinkAuth title={'Синхронизировать'} src={google} href={'/'}/>
                    <LinkAuth title={'Синхронизировать'} src={apple} href={'/'}/>
                </div>
            </div>  
        
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          initialDate={formatDateToGMTPlus0300(currentWeekStart)} // Устанавливаем начальную дату недели
          dateClick={handleTimeClick} // Обработчик клика по времени для добавления события
          eventClick={handleEventClick} // Обработчик клика по событию
          locales={[ruLocale]}
          locale='ru'
          key={currentWeekStart.toISOString()}
          
          slotMinTime={'08:00:00'} // Устанавливаем минимальное время отображения на 8 утра
          slotMaxTime={'20:00:00'} // Устанавливаем максимальное время отображения на 8 вечера (по желанию)
        />
      </section>
    );
};
  
export default MyCalendar;