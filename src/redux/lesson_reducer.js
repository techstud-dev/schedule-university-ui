import { createSlice } from "@reduxjs/toolkit";

export const lessonSlice = createSlice({
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
