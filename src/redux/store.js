import { configureStore } from "@reduxjs/toolkit";
import laptopsReducer from "./laptops/laptopSlice";

export const store = configureStore({
  reducer: {
    laptops: laptopsReducer,
  },
});
