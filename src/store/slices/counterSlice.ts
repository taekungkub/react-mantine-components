import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState = {
  counter: 0,
  loading: false,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<void>) => {
      state.counter = state.counter + 1
    },
    decrease: (state, action: PayloadAction<void>) => {
      state.counter = state.counter - 1
    },
  },
  extraReducers: (builder) => {},
})

export const { increase, decrease } = counterSlice.actions
export const counterSelector = (store: RootState) => store.couter
export default counterSlice.reducer
