import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  products: [],
  totalPrice: 0,
  hasErrors: false,
  loading: false
}

export const cartSlice = {
  name: 'itemsInCart',
  initialState,
  reducers: {
    resetCart: state => {
      state.cartItems = []
      state.totalPrice = 0
      state.products = []
      state.loading = false
    },
    addToCart: (state, { payload }) => {
      // check if items exists among initial products before adding to cart
    }
  }
}

const { actions, reducer } = cartSlice

export default reducer
