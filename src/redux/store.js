import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./tours/tourSlice";

export const store = configureStore({
  reducer: {
    tours: toursReducer,
  },
});
