import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageStates {
  index: number
}

const pageSlice = createSlice({
  name: 'page',
  initialState: { index: 0 } as PageStates,
  reducers: {
    setIndex: (state: PageStates, action: PayloadAction<number>) => ({
      ...state,
      index: action.payload
    })
  }
})

export const { setIndex } = pageSlice.actions
export default pageSlice.reducer
