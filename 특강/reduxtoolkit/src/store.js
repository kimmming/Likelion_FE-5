import { configureStore } from '@reduxjs/toolkit'
import {user, user2} from './store/userSlice.js'

export default configureStore({
  reducer: {
    user : user.reducer,
    user2 : user2.reducer,
   }
})