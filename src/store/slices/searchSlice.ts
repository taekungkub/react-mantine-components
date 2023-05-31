import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { FetchStatusTy, ProductTy } from "@/type"
import DummyServices from "../../services/DummyServices"

interface SliceState {
  products: ProductTy[]
  productsStatus: FetchStatusTy
  searchTerms: string
}

const initialState: SliceState = {
  products: [],
  productsStatus: "idle",
  searchTerms: "",
}

export const fetchSearchProducts = createAsyncThunk("search/fetchSearchProducts", async (keyword: string) => {
  const response = await DummyServices.searchProduct(keyword)
  return response.data.products
})

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerms: (state, action: PayloadAction<string>) => {
      state.searchTerms = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchProducts.pending, (state, action) => {
        state.productsStatus = "loading"
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.productsStatus = "succeeded"
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.productsStatus = "failed"
      })
  },
})
export const { setSearchTerms } = searchSlice.actions

export const searchSelector = (store: RootState) => store.product

export const getAllProducts = (state: RootState) => state.search.products

export const getProductStatus = (state: RootState) => state.search.productsStatus

export default searchSlice.reducer
