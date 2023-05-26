import DummyServices from "@/services/DummyServices";
import { FetchStatusTy, ProductTy } from "@/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface CategoryState {
  categories: string[];
  categoriesStatus: FetchStatusTy;
  categoryProducts:ProductTy[],
  categoryProductsStatis:FetchStatusTy
}

const initialState: CategoryState = {
  categories: [],
  categoriesStatus: "idle",
  categoryProducts:[],
  categoryProductsStatis: 'idle'
}


export const fetchCategories = createAsyncThunk("users/fetchCategories", async () => {
    const res = await DummyServices.categories()
    return res.data
  })

  export const fetchCategoryProducts = createAsyncThunk("users/fetchCategoryProducts", async () => {
    const res = await DummyServices.categories()
    return res.data.products
  })



export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers(builder) {
    builder
    .addCase(fetchCategories.pending, (state, action) => {
        state.categoriesStatus = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.categoriesStatus = 'succeeded'
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = 'failed'
      })
 
  },
});

export const { reducerName } = categorySlice.actions;

export const getAllCategories =  (state:RootState) => state.categoryReducer.categories;


export default categorySlice.reducer;
