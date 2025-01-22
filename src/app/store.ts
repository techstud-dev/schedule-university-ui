import { configureStore } from '@reduxjs/toolkit'
import scheduleSlice from '@/entities/schedule/model/schedule.slice'
// import lessonSlice from "./lesson_reducer";

export default configureStore({
    reducer: {
        lesson: scheduleSlice
    },
})