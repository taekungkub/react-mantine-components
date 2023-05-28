import DummyServices from "@/services/DummyServices";
import { FetchStatusTy, ProductTy } from "@/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface CategoryState {
  categories: Array<string>
  categoriesStatus: FetchStatusTy;
  categoryProducts:ProductTy[],
  categoryProductsStatus:FetchStatusTy
}

const initialState: CategoryState = {
  categories: [],
  categoriesStatus: "idle",
  categoryProducts:[],
  categoryProductsStatus: 'idle'
}


export const fetchCategories = createAsyncThunk("users/fetchCategories", async () => {
    const res = await DummyServices.categories()
    return res.data
  })

  export const fetchCategoryProducts = createAsyncThunk("users/fetchCategoryProducts", async (category:string) => {
    const res = await DummyServices.categoryProducts(category)
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

      builder
      .addCase(fetchCategoryProducts.pending, (state, action) => {
          state.categoryProductsStatus = 'loading'
        })
        .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
          state.categoryProducts = action.payload
          state.categoryProductsStatus = 'succeeded'
        })
        .addCase(fetchCategoryProducts.rejected, (state, action) => {
          state.categoryProductsStatus = 'failed'
        })

 
  },
});

export const { reducerName } = categorySlice.actions;


export const categorySelector =  (state:RootState) => state.category;

export const getAllCategories =  (state:RootState) => state.category.categories;

export const getAllCategoryProduct =  (state:RootState) => state.category.categoryProducts;


export default categorySlice.reducer;
