import { configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/postSlice'

const store = configureStore({
  reducer: {
    post: postReducer
  }
})

declare global {
  type Store = ReturnType<typeof store.getState>
}

export default store
