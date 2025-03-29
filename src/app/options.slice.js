import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        isUniversities: [
        { value: 'option1', label: 'ВУЗ 1' },
        { value: 'option2', label: 'ВУЗ 2' },
        { value: 'option3', label: 'ВУЗ 3' },
        ],
        isSelectedUniversity: '',
        isGroups: [
            { value: 'option1', label: 'Группа 1' },
            { value: 'option2', label: 'Группа 2' },
            { value: 'option3', label: 'Группа 3' },
        ],
        isSelectedGroup: '',
    },
    selectors: {
        selectIsUniversities: (state) => state.isUniversities,
        selectIsUniversity: (state) => state.isSelectedUniversity,
        selectIsGroups: (state) => state.isGroups,
        selectIsGroup: (state) => state.isSelectedGroup,
    },
    reducers: {
        setIsUniversity: (state, action) => {
            return {
                ...state,
                isSelectedUniversity: action.payload
            }
        },
        setIsGroup: (state, action) => {
            return {
                ...state,
                isSelectedGroup: action.payload
            }
        },
    }
});
