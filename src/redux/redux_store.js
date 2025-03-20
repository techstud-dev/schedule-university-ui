// import { combineReducers, legacy_createStore } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import lessonSlice from "./lesson_reducer";
import registrationReducer from './registration_reducer';

export default configureStore({
    reducer: {
        lesson: lessonSlice,
        login: registrationReducer,
    },
})