// import { combineReducers, legacy_createStore } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import lessonSlice from "./lesson_reducer";

export default configureStore({
    reducer: {
        lesson: lessonSlice
    },
}) 

// let rootReducers = combineReducers({
    
// })

// const store = legacy_createStore(rootReducers);

// window.store = store;

// export default store;