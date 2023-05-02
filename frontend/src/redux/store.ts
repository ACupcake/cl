import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from './slice'

export default configureStore({
    reducer: {
      username: usernameSlice
    }
  })
