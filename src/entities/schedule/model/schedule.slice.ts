import { createSlice } from "@reduxjs/toolkit/react";

export const scheduleSlice = createSlice({
  name: "lesson",
  initialState: {
    Понедельник: {
      lessons: {
        "08:30 - 10:05": [
          {
            type: "Лекция",
            name: "Конструирование узлов и элементов биотехнических систем",
            teacher: "Шамаев Дмитрий Михайлович",
            place: "201х",
            groups: ["БМТ1-51Б,52Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          },
        ],
        "10:15 - 11:50": [
          {
            type: "Лекция",
            name: "Метрология, стандартизация и технические измерения",
            teacher: "Муравская Наталья Павловна",
            place: "201х",
            groups: ["БМТ1-51Б,52Б,53Б", "БМТ2-51Б,52Б", "БМТ1И-51Б"],
          },
        ],
      },
    },
  },
  reducers: {
    add: (state) => {
      return {
        ...state,
        lessons: [
          {
            id: 4,
            lessonType: state.newlessonType,
            // body: state.newLessonBody,
            likes: 0,
          },
          ...state.lessons,
        ],
        newlessonType: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = scheduleSlice.actions;

export default scheduleSlice.reducer;