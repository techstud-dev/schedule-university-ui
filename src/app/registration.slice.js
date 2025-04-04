import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: true, 
    },
    selectors: {
        selectIsLogin: (state) => state.isLogin,
    },
    reducers: {
        setIsLogin: (state, action) => {
            return {
                ...state,
                isLogin: action.payload
            }
        },
        clearIsLogin: (state) => {
            return {
                ...state,
                isLogin: true
            }
        },
    },
});

export const { setLogin, clearLogin } = registrationSlice.actions;
