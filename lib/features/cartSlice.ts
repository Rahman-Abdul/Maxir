import {
    createSelector,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import { RootState } from "../store";
  // Define a type for the slice


interface CartState {
  items: Array<{ id: number; quantity: number }>;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({
          id: action.payload.id,
          quantity: 1,
        });
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity--;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
      state.totalQuantity--;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
