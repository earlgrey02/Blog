import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '@/redux/reducers/pageSlice'

const store = configureStore({
  reducer: {
    page: pageReducer
  }
})

declare global {
  type Store = ReturnType<typeof store.getState>
}

export default store
