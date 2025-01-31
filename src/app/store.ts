import { configureStore, createSelector } from '@reduxjs/toolkit'
import scheduleSlice from '@/entities/schedule/model/schedule.slice'
import { authSlice } from '@/features/auth/model/auth.slice'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { baseAPI } from '@/shared/api/api';

export const store = configureStore({
    reducer: {
        lesson: scheduleSlice,
        [authSlice.name]: authSlice.reducer,
        [baseAPI.reducerPath]: baseAPI.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseAPI.middleware)
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();