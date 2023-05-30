import { CartItemTy } from "@/type"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface CartState {
  carts: CartItemTy[]
  itemsCount: number
  totalAmount: number
  isCartMessageOn: boolean
}

const fetchCategories = () => {
  let cart = localStorage.getItem("cart")
  if (cart) {
    return JSON.parse(cart)
  } else {
    return []
  }
}

const initialState: CartState = {
  carts: [],
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<CartItemTy>) => {
      const isItemInCart = state.carts.find((item: CartItemTy) => item.id === action.payload?.id)
      if (isItemInCart) {
        const tempCart = state.carts.map((item: CartItemTy) => {
          if (item.id === action.payload?.id) {
            let tempQty = item.quantity + action.payload.quantity

            return {
              ...item,
              quantity: tempQty,
            }
          } else {
            return item
          }
        })

        state.carts = tempCart
      } else {
        state.carts.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItemTy>) => {
      const tempCart = state.carts.filter((item) => item?.id != action.payload.id)
      state.carts = tempCart
    },
    clearCart: (state) => {
      state.carts = []
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal: any, cartItem: any) => {
        return (cartTotal += cartItem.totalPrice)
      }, 0)
      state.itemsCount = state.carts.length
    },
    editCartItemQuantity(state, action: PayloadAction<CartItemTy>) {
      const { id, quantity } = action.payload
      const existingItem = state.carts.find((item) => item.id === id)
      if (existingItem) {
        existingItem.quantity = quantity
      }
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false
    },
  },
})

export const { addtoCart, setCartMessageOn, setCartMessageOff, editCartItemQuantity, removeFromCart } = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart

export default cartSlice.reducer
