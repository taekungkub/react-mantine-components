import { CartItemTy } from "@/type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  carts: CartItemTy[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
  selected: CartItemTy[];
}

const fetchCategories = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: CartState = {
  carts:fetchCategories(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
  selected: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<CartItemTy>) => {
      const isItemInCart = state.carts.find((item: CartItemTy) => item.id === action.payload?.id);
      if (isItemInCart) {
        const tempCart = state.carts.map((item: CartItemTy) => {
          if (item.id === action.payload?.id) {
            let tempQty = item.quantity + action.payload.quantity;

            return {
              ...item,
              quantity: tempQty,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        localStorage.setItem('cart' , JSON.stringify(tempCart))
      } else {
        state.carts.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItemTy>) => {
      const tempCart = state.carts.filter((item) => item?.id != action.payload.id);
      const tempCart2 = state.selected.filter((item) => item?.id != action.payload.id);

      state.carts = tempCart;
      state.selected = tempCart2;

      localStorage.setItem('cart' , JSON.stringify(tempCart))

    },
    clearCart: (state) => {
      state.carts = [];
    },
    getCartTotal: (state) => {
      state.totalAmount = state.selected.reduce((total, item: CartItemTy) => total + item.price * item.quantity, 0);
      state.itemsCount = state.selected.length;
    },
    editCartItemQuantity(state, action: PayloadAction<CartItemTy>) {
      const { id, quantity } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      const existingItem2 = state.selected.find((item) => item.id === id);
      if (existingItem2) {
        existingItem2.quantity = quantity;
      }
      localStorage.setItem('cart' , JSON.stringify(state.carts))

    },
    setSelected(state, action: PayloadAction<number[]>) {
      state.selected = state.carts.filter((v) => action.payload.includes(v.id));
    },
    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const { addtoCart, setCartMessageOn, setCartMessageOff, editCartItemQuantity, removeFromCart, getCartTotal, setSelected } =
  cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
