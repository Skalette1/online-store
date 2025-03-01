import { configureStore } from "@reduxjs/toolkit";
import birdVisibleReducer from "@/features/model/birdVisibleReducer.js";
import productVisibleReducer from "@/features/model/productVisibleReducer.js";
import eatVisibleReducer from "@/features/model/eatVisibleReducer.js";
import izbaVisibleReducer from "@/features/model/izbarVisibleReducer.js";
import cartReducer from "../features/model/reducers/cartReducer.js";
import cartCounterReducer from "../features/model/reducers/cartCounterReducer.js";

const store = configureStore({
  reducer: {
    bird: birdVisibleReducer,
    product: productVisibleReducer,
    eat: eatVisibleReducer,
    izba: izbaVisibleReducer,
    counter: cartCounterReducer,
    cart: cartReducer,
  },
});

export default store;
