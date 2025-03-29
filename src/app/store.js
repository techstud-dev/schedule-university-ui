// import { combineReducers, legacy_createStore } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { lessons, lessonSlice } from "./lesson.slice";
import { authSlice } from './auth.slice';
import { authApi } from './authApi';
import { registrationSlice } from './registration.slice';
import { optionsSlice } from './options.slice';

export const store = configureStore({
    reducer: {
        lesson: lessonSlice.reducer,
        auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        login: registrationSlice.reducer,
        options: optionsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

store.dispatch(lessonSlice.actions.stored({ lessons }))