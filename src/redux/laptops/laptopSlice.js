import { createSlice } from "@reduxjs/toolkit";
import {
  getLaptops,
  addLaptops,
  deleteLaptops,
  editLaptops,
} from "../../services/laptopService";

const initialState = {
  laptops: [],
};

const laptopsSlice = createSlice({
  name: "laptops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLaptops.fulfilled, (state, action) => {
      state.laptops = action.payload;
    });
    builder.addCase(addLaptops.fulfilled, (state, action) => {
      state.laptops.push(action.payload);
    });
    builder.addCase(deleteLaptops.fulfilled, (state, action) => {
      state.laptops.splice(action.payload);
    });
    builder.addCase(editLaptops.fulfilled, (state, action) => {
      state.laptops = action.payload;
    });
  },
});
export default laptopsSlice.reducer;
