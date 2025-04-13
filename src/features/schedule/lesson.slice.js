import { createSlice } from "@reduxjs/toolkit";

export const lessons = [
  {
    id: "67516a6ff4caa9406220b8a1",
    dayOfWeek: "Понедельник",
    date: 1733646437241,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8be",
    dayOfWeek: "Вторник",
    date: 1733732837333,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8aa",
    dayOfWeek: "Среда",
    date: 1733819237350,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8ai",
    dayOfWeek: "Четверг",
    date: 1733905637363,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8ae",
    dayOfWeek: "Пятница",
    date: 1733992037382,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8la",
    dayOfWeek: "Суббота",
    date: 1733992037382,
    time: "Весь день",
    type: "Пар нет",
    name: "Отдых",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
  {
    id: "67516a6ff4caa9406220b8yt",
    dayOfWeek: "Воскресенье",
    date: 1733992037382,
    time: "Весь день",
    type: "Пар нет",
    name: "Пар нет XD",
    teacher: "Ты сам себе препод",
    place: "Где хочешь",
    groups: ["Только у тебя"],
    isEven: false,
  },
]

export const lessonSlice = createSlice({
  name: "lesson",
  initialState: [],
  reducers: {
    stored: (state, action) => {
      const {lessons} = action.payload;
      
      return {
        ...lessons
      }
    },
  },
});
