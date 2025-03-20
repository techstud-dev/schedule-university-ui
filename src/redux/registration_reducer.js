import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
    name: 'login',
    initialState: {
        login: true, 
    },
    reducers: {
        setLogin(state, action) {
            state.login = action.payload; 
        },
        clearLogin(state) {
            state.login = true; 
        },
    },
});

export const { setLogin, clearLogin } = registrationSlice.actions;
export default registrationSlice.reducer;