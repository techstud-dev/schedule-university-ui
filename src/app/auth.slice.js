import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: false,
  isLoading: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  selectors: {
    selectIsAuth: (state) => state.isAuth,
    selectIsLoading: (state) => state.isLoading
  },
  reducers: {
    setIsAuth: (state, action) => {
      return {
        ...state,
        isAuth: action.payload
      }
    },
    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload
      }
    }
  }
})