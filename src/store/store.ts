import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"


import counterReducer from "./slices/counterSlice"
import productReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
import categoryReducer from "./slices/categorySlice"


const reducer = {
  couter:counterReducer,
  product:productReducer,
  cart:cartReducer,
  category:categoryReducer
}


export const store = configureStore({
  reducer,
})

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
