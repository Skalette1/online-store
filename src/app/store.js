import { configureStore } from "@reduxjs/toolkit";
import birdVisibleReducer from "../features/model/birdVisibleReducer";
import productVisibleReducer from "../features/model/productVisibleReducer";
import eatVisibleReducer from "../features/model/eatVisibleReducer.js";
import izbaVisibleReducer from "../features/model/izbarVisibleReducer.js";
const store = configureStore({
  reducer: {
    bird: birdVisibleReducer,
    product: productVisibleReducer,
    eat: eatVisibleReducer,
    izba: izbaVisibleReducer,
  },
});

export default store;
