import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './reducers/TaskSlice'

export const store = configureStore({
    reducer: {
        tasks : tasksSlice,
    }
})