import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
