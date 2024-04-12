import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
