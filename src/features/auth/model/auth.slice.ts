import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean,
}

const InitialAuthState: AuthState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: InitialAuthState,
  selectors: {
    selectAuth: (state) => state.isAuth
  },
  reducers: {
    checkAuth: (state) => {
      if (localStorage.getItem("auth")) {
        return {
          ...state,
          isAuth: true
        }
      }
    },

    login: (state) => {
      localStorage.setItem("auth", "token123");
      return {...state, isAuth: true}
    },

    logout: (state) => {
      localStorage.removeItem("auth");
      return {...state, isAuth: false}
    },
  }
})