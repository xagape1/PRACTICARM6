import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './slices/todos/todosSlice'

export const store = configureStore({
    reducer: {
        todos:todosSlice,
    }
})
