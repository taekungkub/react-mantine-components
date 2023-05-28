import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FetchStatusTy, ProductTy } from "@/type";
import ProductServices from "../../services/ProductServices";

interface SliceState {
  products: ProductTy[];
  productsStatus: FetchStatusTy;
  productData: ProductTy | null;
  productDataStatus: FetchStatusTy;
}

const initialState: SliceState = {
  products: [],
  productsStatus: "idle",
  productData: null,
  productDataStatus: "idle",
};

export const fetchProducts = createAsyncThunk("users/fetchProducts", async () => {
  const response = await ProductServices.products();
  return response.data.products;
});

export const fetchOneProducts = createAsyncThunk("users/fetchOneProduct", async (id: string) => {
  const response = await ProductServices.product(id);
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selecteProductById: (state, action: PayloadAction<Number>) => {
      state.productData = state.products.find((v) =>  v.id === action.payload) ?? null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "failed";
      });

    builder
      .addCase(fetchOneProducts.pending, (state, action) => {
        state.productDataStatus = "loading";
      })
      .addCase(fetchOneProducts.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.productDataStatus = "succeeded";
      })
      .addCase(fetchOneProducts.rejected, (state, action) => {
        state.productDataStatus = "failed";
      });
  },
});

export const { selecteProductById } = productSlice.actions;
export const productSelector = (store: RootState) => store.product;

export const getAllProducts = (state: RootState) => state.product.products;

export const getOneProduct = (state: RootState) => state.product.productData;

// export const selectProductById = (state: RootState , id:number) => state.productReducer.products.find((v)=> v.id === id)

export default productSlice.reducer;
