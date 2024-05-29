import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterStates {
  tags: string[]
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: { tags: [] } as FilterStates,
  reducers: {
    setTags: (state: FilterStates, action: PayloadAction<string[]>) => ({
      ...state,
      tags: action.payload
    })
  }
})

export const { setTags } = filterSlice.actions
export default filterSlice.reducer
