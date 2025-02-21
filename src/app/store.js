import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../widgets/header/model/cartReducer";

export const store = configureStore({
  reducer: countReducer,
});
