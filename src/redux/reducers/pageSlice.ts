import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    setPage: (state: number, action: PayloadAction<number>) => action.payload
  }
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer
