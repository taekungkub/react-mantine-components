import { CartItemTy } from "@/type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CartState {
  carts: CartItemTy[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
}

const fetchCategories = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  carts: fetchCategories(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<CartItemTy>) => {
      const isItemInCart = state.carts.find((item: CartItemTy) => item.id === action.payload.id);
      if (isItemInCart) {
        const tempCart = state.carts.map((item: CartItemTy) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let temTotalPrice = tempQty + item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: temTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        localStorage.setItem("cart", state.carts);
      } else {
        state.carts.push(action.payload);
        localStorage.setItem("cart", state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item:CartItemTy)=>item.id === action.payload.id)
      state.carts = tempCart
      localStorage.setItem("cart", state.carts);

    },
    clearCart: (state) => {
      state.carts = [];
      localStorage.setItem("cart", state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal:any , cartItem:any)=>{
        return cartTotal += cartItem.totalPrice
      } , 0)
      state.itemsCount = state.carts.length
     
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const { addtoCart, setCartMessageOn, setCartMessageOff } = cartSlice.actions;

export default cartSlice.reducer;
