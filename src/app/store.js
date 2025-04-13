import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './../features/auth/authSlice';
import { authApi } from "./../features/auth/authApi";

const authReducer = authSlice.reducer;

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});
