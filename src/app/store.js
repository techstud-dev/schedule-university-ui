import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice';
import {authApi} from "./authApi";

const authReducer = authSlice.reducer;

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});
