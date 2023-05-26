


import { createSlice } from '@reduxjs/toolkit';





const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reducerName: (state, action) => {
      
    },
  },
});

export const { reducerName } = cartSlice.actions;

export default cartSlice.reducer;