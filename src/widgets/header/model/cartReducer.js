import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartElements: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
    removeElement: (state, action) => {
      state.cartElements.filter((element) => element.id !== action.payload);
    },
  },
});

export const { addElement, removeElement } = slice.actions;
export const countReducer = slice.reducer;
