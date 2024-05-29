import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '@/redux/reducers/pageSlice'
import filterReducer from '@/redux/reducers/filterSlice'

const store = configureStore({
  reducer: {
    page: pageReducer,
    filter: filterReducer
  }
})

declare global {
  type Store = ReturnType<typeof store.getState>
}

export default store
