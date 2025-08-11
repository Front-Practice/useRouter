import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import foldersReducer from './foldersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    folders: foldersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

