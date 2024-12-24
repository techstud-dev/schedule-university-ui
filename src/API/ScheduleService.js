import axios from "axios";

export default class ScheduleService {
  static async getAllSchedule() {
    const response = await axios.get(`/api/v1/schedule/postAuthorize`, {
      params: {},
    });
    return response;
  }

  // на период теста
  static getDefaultSchedule() {
    const fakeResponse = {
      oddWeekSchedules: [
        {
          id: "67516a6ff4caa9406220b8a1",
          dayOfWeek: "Понедельник",
          date: 1733646437241,
          time: "08:30 - 10:05",
          type: "Лекция",
          name: "Конструирование узлов и элементов биотехнических систем",
          teacher: "Шамаев Дмитрий Михайлович",
          place: "201х",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8ba",
          dayOfWeek: "Понедельник",
          date: 1733646437321,
          time: "10:15 - 11:50",
          type: "Лекция",
          name: "Философия",
          teacher: "Губанов Николай Николаевич",
          place: "201х",
          groups: ["БМТ1-51Б,52Б,53Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8bb",
          dayOfWeek: "Понедельник",
          date: 1733646437326,
          time: "12:00 - 13:35",
          type: "Практика",
          name: "Метрология, стандартизация и технические измерения",
          teacher: "Муравская Наталья Павловна",
          place: "520т",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8bc",
          dayOfWeek: "Понедельник",
          date: 1733646437329,
          time: "13:50 - 15:25",
          type: "Практика",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "531.2",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bd/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bd",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8be",
          dayOfWeek: "Вторник",
          date: 1733732837333,
          time: "12:00 - 13:35",
          type: "Лабораторная работа",
          name: "Конструирование узлов и элементов биотехнических систем",
          teacher: "Патрикеева Анастасия Андреевна",
          place: "каф. РЛ5",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8be",
          dayOfWeek: "Вторник",
          date: 1733732837337,
          time: "13:50 - 15:25",
          type: "Лабораторная работа",
          name: "Конструирование узлов и элементов биотехнических систем",
          teacher: "Патрикеева Анастасия Андреевна",
          place: "каф. РЛ5",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8a6",
          dayOfWeek: "Вторник",
          date: 1733732837342,
          time: "15:40 - 17:15",
          type: "Практика",
          name: "Политология",
          teacher: "Шалдунова Татьяна Николаевна",
          place: "203х",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a5",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a5",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a5",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8a8",
          dayOfWeek: "Вторник",
          date: 1733732837345,
          time: "17:25 - 19:00",
          type: "Практика",
          name: "Иностранный язык",
          teacher: "-",
          place: "220х",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a7",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a7",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8bf/67516a6ff4caa9406220b8a7",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8bf",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237350,
          time: "08:30 - 10:05",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237353,
          time: "10:15 - 11:50",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237357,
          time: "12:00 - 13:35",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237360,
          time: "13:50 - 15:25",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8ae",
          dayOfWeek: "Четверг",
          date: 1733905637363,
          time: "10:15 - 11:50",
          type: "Практика",
          name: "Элективный курс по физической культуре и спорту",
          teacher: "-",
          place: "каф. ФВ",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8af",
          dayOfWeek: "Четверг",
          date: 1733905637366,
          time: "12:00 - 13:35",
          type: "Лекция",
          name: "Биофизические основы живых систем 1",
          teacher: "-",
          place: "318",
          groups: ["БМТ2-51Б,52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b0",
          dayOfWeek: "Четверг",
          date: 1733905637370,
          time: "13:50 - 15:25",
          type: "Практика",
          name: "Философия",
          teacher: "Нехамкин Валерий Аркадьевич",
          place: "520т",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "DELETE",
            },
          },
        },
        {
          id: "675bd891205e5d029799eb2d",
          dayOfWeek: "Четверг",
          date: 1733905637374,
          time: "15:40 - 17:15",
          type: "Лабораторная работа",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "1204.1",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a5",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a5",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a5",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "DELETE",
            },
          },
        },
        {
          id: "675bd891205e5d029799eb2d",
          dayOfWeek: "Четверг",
          date: 1733905637378,
          time: "17:25 - 19:00",
          type: "Лабораторная работа",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "1204.1",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a7",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a7",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/675bd891205e5d029799eb2e/67516a6ff4caa9406220b8a7",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/675bd891205e5d029799eb2e",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8ae",
          dayOfWeek: "Пятница",
          date: 1733992037382,
          time: "08:30 - 10:05",
          type: "Практика",
          name: "Элективный курс по физической культуре и спорту",
          teacher: "-",
          place: "каф. ФВ",
          groups: ["БМТ2-52Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b4",
          dayOfWeek: "Пятница",
          date: 1733992037385,
          time: "10:15 - 11:50",
          type: "Лекция",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "502ю",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b4",
          dayOfWeek: "Пятница",
          date: 1733992037390,
          time: "12:00 - 13:35",
          type: "Лекция",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "502ю",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b5",
          dayOfWeek: "Пятница",
          date: 1733992037393,
          time: "13:50 - 15:25",
          type: "Лекция",
          name: "Биомеханика",
          teacher: "Щукин Сергей Игоревич",
          place: "502ю",
          groups: ["БМТ1-51Б,52Б,53Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: false,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8c2/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8c2",
              type: "DELETE",
            },
          },
        },
      ],
      evenWeekSchedules: [
        {
          id: "67516a6ff4caa9406220b8a1",
          dayOfWeek: "Понедельник",
          date: 1733646437396,
          time: "08:30 - 10:05",
          type: "Лекция",
          name: "Конструирование узлов и элементов биотехнических систем",
          teacher: "Шамаев Дмитрий Михайлович",
          place: "201х",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8a3",
          dayOfWeek: "Понедельник",
          date: 1733646437400,
          time: "10:15 - 11:50",
          type: "Лекция",
          name: "Метрология, стандартизация и технические измерения",
          teacher: "Муравская Наталья Павловна",
          place: "201х",
          groups: ["БМТ1-51Б,52Б,53Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a4/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a4",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8a6",
          dayOfWeek: "Вторник",
          date: 1733732837403,
          time: "15:40 - 17:15",
          type: "Практика",
          name: "Политология",
          teacher: "Шалдунова Татьяна Николаевна",
          place: "203х",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a5",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a5",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a5",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8a8",
          dayOfWeek: "Вторник",
          date: 1733732837407,
          time: "17:25 - 19:00",
          type: "Практика",
          name: "Иностранный язык",
          teacher: "-",
          place: "220х",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a7",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a7",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8a9/67516a6ff4caa9406220b8a7",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8a9",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237410,
          time: "08:30 - 10:05",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237414,
          time: "10:15 - 11:50",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237418,
          time: "12:00 - 13:35",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8aa",
          dayOfWeek: "Среда",
          date: 1733819237423,
          time: "13:50 - 15:25",
          type: "Другое",
          name: "ВУЦ",
          teacher: "-",
          place: null,
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8ad/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8ad",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8ae",
          dayOfWeek: "Четверг",
          date: 1733905637428,
          time: "10:15 - 11:50",
          type: "Практика",
          name: "Элективный курс по физической культуре и спорту",
          teacher: "-",
          place: "каф. ФВ",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8af",
          dayOfWeek: "Четверг",
          date: 1733905637431,
          time: "12:00 - 13:35",
          type: "Лекция",
          name: "Биофизические основы живых систем 1",
          teacher: "-",
          place: "318",
          groups: ["БМТ2-51Б,52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b0",
          dayOfWeek: "Четверг",
          date: 1733905637435,
          time: "13:50 - 15:25",
          type: "Практика",
          name: "Философия",
          teacher: "Нехамкин Валерий Аркадьевич",
          place: "520т",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b1",
          dayOfWeek: "Четверг",
          date: 1733905637438,
          time: "15:40 - 17:15",
          type: "Практика",
          name: "Конструирование узлов и элементов биотехнических систем",
          teacher: "Патрикеева Анастасия Андреевна",
          place: "520т",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a5",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a5",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b2/67516a6ff4caa9406220b8a5",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b2",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8ae",
          dayOfWeek: "Пятница",
          date: 1733992037442,
          time: "08:30 - 10:05",
          type: "Практика",
          name: "Элективный курс по физической культуре и спорту",
          teacher: "-",
          place: "каф. ФВ",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a0",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a0",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a0",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b3",
          dayOfWeek: "Пятница",
          date: 1733992037445,
          time: "10:15 - 11:50",
          type: "Лекция",
          name: "Политология",
          teacher: "Гришнова Елена Евгеньевна",
          place: "201х",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b4",
          dayOfWeek: "Пятница",
          date: 1733992037448,
          time: "12:00 - 13:35",
          type: "Лекция",
          name: "Электроника и микропроцессорная техника",
          teacher: "Трубачёв Евгений Александрович",
          place: "502ю",
          groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b5",
          dayOfWeek: "Пятница",
          date: 1733992037451,
          time: "13:50 - 15:25",
          type: "Лекция",
          name: "Биомеханика",
          teacher: "Щукин Сергей Игоревич",
          place: "502ю",
          groups: ["БМТ1-51Б,52Б,53Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ac",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ac",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b6/67516a6ff4caa9406220b8ac",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b6",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b7",
          dayOfWeek: "Суббота",
          date: 1734078437455,
          time: "10:15 - 11:50",
          type: "Лекция",
          name: "Клиническая терапия и хирургия",
          teacher: "-",
          place: "516т",
          groups: ["БМТ2-51Б,52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8a2",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8a2",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8a2",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "DELETE",
            },
          },
        },
        {
          id: "67516a6ff4caa9406220b8b8",
          dayOfWeek: "Суббота",
          date: 1734078437458,
          time: "12:00 - 13:35",
          type: "Лабораторная работа",
          name: "Клиническая терапия и хирургия",
          teacher: "-",
          place: "каф. БМТ4",
          groups: ["БМТ2-52Б"],
          isEven: true,
          _links: {
            getScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8ab",
              type: "GET",
            },
            updateScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8ab",
              type: "PUT",
            },
            deleteScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/67516a6ff4caa9406220b8b9/67516a6ff4caa9406220b8ab",
              type: "DELETE",
            },
            createScheduleObject: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/lesson/",
              type: "POST",
            },
            getScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "GET",
            },
            createScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/",
              type: "POST",
            },
            updateScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "PUT",
            },
            deleteScheduleDay: {
              href: "http://localhost:8080/api/v1/schedule/scheduleDay/67516a6ff4caa9406220b8b9",
              type: "DELETE",
            },
          },
        },
      ],
      snapshotDate: "2024-12-13",
      _links: {
        getSchedule: {
          href: "http://localhost:8080/api/v1/schedule/675befe5e0f6577de9abff5a",
          type: "GET",
        },
        updateSchedule: {
          href: "http://localhost:8080/api/v1/schedule/675befe5e0f6577de9abff5a",
          type: "PUT",
        },
        deleteSchedule: {
          href: "http://localhost:8080/api/v1/schedule/675befe5e0f6577de9abff5a",
          type: "DELETE",
        },
        importSchedule: {
          href: "http://localhost:8080/api/v1/schedule/import",
          type: "POST",
        },
        forceImportSchedule: {
          href: "http://localhost:8080/api/v1/schedule/forceImport",
          type: "POST",
        },
        createSchedule: {
          href: "http://localhost:8080/api/v1/schedule/create",
          type: "POST",
        },
      },
    };

    console.log(fakeResponse);

    return fakeResponse;
  }
}
