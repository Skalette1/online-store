import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToCart, remove } = cartReducer.actions;
export default cartReducer.reducer;
