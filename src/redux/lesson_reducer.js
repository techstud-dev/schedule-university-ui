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
//   //   default:
//   //     return state;
//   }
// };

// export const updatePostCreator = (headline, body) => ({
//   type: UPDATE_POST,
//   newTtext: headline,
//   newPText: body,
// });
// // export const addCommentCreator = () => ({ type: ADD_COMMENT });
// // export const updateCommentCreator = (body) => ({
// //   type: UPDATE_COMMENT,
// //   body: body,
// // });

// export default lessonReducer;