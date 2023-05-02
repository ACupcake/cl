import { createSlice } from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: localStorage.getItem('username') as string || ""
  },
  reducers: {
    changeUsername: (state, action) => {
      state.value = action.payload
      localStorage.setItem('username', action.payload)
    }
  }
})

export const { changeUsername } = usernameSlice.actions

export default usernameSlice.reducer