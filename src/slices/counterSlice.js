import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,actions) => {

        state.value = actions.payload

    //   this way you can update things in redux   
    //   state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions

export default counterSlice.reducer