import { product } from "../../Data/Products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = product;
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId } = action.payload;
      const index = state.findIndex((product) => product.id === productId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          cart: state[index].cart === "CART" ? null : "CART",
          productCount: state[index].productCount >= 1 ? null : 1,
        };
      }
    },
    plus(state, action) {
      const { productId } = action.payload;
      const index = state.findIndex((product) => product.id === productId);
      if (index !== -1 && state[index].cart === "CART") {
        state[index] = {
          ...state[index],
          productCount: state[index].productCount + 1,
        };
      }
    },
    minus(state, action) {
      const { productId } = action.payload;
      const index = state.findIndex((product) => product.id === productId);
      if (index !== -1 && state[index].cart === "CART") {
        state[index] = {
          ...state[index],
          productCount: state[index].productCount - 1,
          cart: state[index].productCount === 1 ? null : "CART",
        };
      }
    },
    filterProduct(state, action) {
      const { searchQuery } = action.payload;
      return product.filter((product) =>
        product.alt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});

export const ProductsFromSlice = (state) => state.product;
export const { addToCart, plus, minus, filterProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
