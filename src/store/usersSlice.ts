import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
  age: number
  email: string
  address: string
  phone: string
}

export interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      prepare: (user: Omit<User, 'id'>) => ({ payload: { id: nanoid(), ...user } }),
      reducer: (state, action: PayloadAction<User>) => {
        state.users.push(action.payload)
      },
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(u => u.id !== action.payload)
    },
    clearUsers: state => {
      state.users = []
    },
  },
})

export const { addUser, removeUser, clearUsers } = usersSlice.actions
export default usersSlice.reducer

