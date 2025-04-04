import { createSlice } from "@reduxjs/toolkit";

export const lessonSlice = createSlice({
  name: "lesson",
  initialState: [
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
  ],
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
export const { add } = lessonSlice.actions;

export default lessonSlice.reducer;

// const ADD_LESSON = "ADD-LESSON";
// const UPDATE_LESSON = "UPDATE-LESSON";
// // const ADD_COMMENT = "ADD-COMMENT";
// // const UPDATE_COMMENT = "UPDATE-COMMENT";

// const initialState = {
//   lessons: [
//     {
//       id: 1,
//       lessonType: 'Лекция',
//       teacher: 'Суханов С.В.',
//       topic: 'Введение в специальность',
//       location: '220 - 1',
//       group: '1'
//     },
//     {
//       id: 2,
//       lessonType: 'Лабораторная',
//       teacher: 'Боцоева А. Н.',
//       topic: 'Философия как часть истории',
//       location: '62',
//       group: '3'
//     },
//     {
//       id: 3,
//       lessonType: 'Зачёт',
//       teacher: 'Свиридов Ю. Ф.',
//       topic: 'Программирование на языке R',
//       location: '81',
//       group: '1'
//     },
//   ]
// };

// const lessonReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LESSON:
//       return {
//         ...state,
//         posts: [ { id: 4, headline: state.newHeadline, body: state.newPostBody, likes: 0, }, ...state.posts],
//         newHeadline: "",
//         newPostBody: "",
//       }
//     case UPDATE_LESSON:
//       return {
//         ...state,
//         newHeadline: action.newTtext,
//         newPostBody: action.newPText,
//       }
//   //   case ADD_COMMENT:
//   //     let newComment = {
//   //       id: 4, // Хардкод, далее будем генерить уникальный айдишник
//   //       body: state.messageBody,
//   //     };

//   //     state.comments.push(newComment);
//   //     // let messageBody = state.newCommentBody;
//   //     state.newCommentBody = "";
//   //     return state;
//   //   case UPDATE_COMMENT:
//   //     state.newCommentBody = action.body;
//   //     return state;
//     default:
//       return state;
//   }
// };

// export const addLessonCreator = () => ({ type: ADD_LESSON });
// export const updatePostCreator = (headline, body) => ({
//   type: UPDATE_LESSON,
//   newTtext: headline,
//   newPText: body,
// });
// // export const addCommentCreator = () => ({ type: ADD_COMMENT });
// // export const updateCommentCreator = (body) => ({
// //   type: UPDATE_COMMENT,
// //   body: body,
// // });

// export default lessonReducer;