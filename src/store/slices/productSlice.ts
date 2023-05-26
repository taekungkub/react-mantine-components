import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { ProductTy } from "@/type"
import ProductServices from "../../services/ProductServices"

interface SliceState {
  loading: boolean
  products: ProductTy[]
  productData: ProductTy | null
}

const initialState: SliceState = {
  loading: false,
  products: [],
  productData: null,
}

export const fetchProducts = createAsyncThunk("users/fetchProducts", async () => {
  const response = await ProductServices.products()
  return response.data.products
})

export const fetchOneProducts = createAsyncThunk("users/fetchOneProduct", async (id: string) => {
  const response = await ProductServices.product(id)
  return response.data
})

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
      })
    builder.addCase(fetchOneProducts.fulfilled, (state, action) => {
      state.productData = action.payload
    })
  },
})

export const {} = productSlice.actions
export const productSelector = (store: RootState) => store.productReducer

export default productSlice.reducer
