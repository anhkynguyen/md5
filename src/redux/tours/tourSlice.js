import { createSlice } from "@reduxjs/toolkit";
import {
  getTours,
  addTours,
  deleteTours,
  editTours,
  findById,
} from "../../services/tourService";

const initialState = {
  tours: [],
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTours.fulfilled, (state, action) => {
      state.tours = action.payload;
    });
    builder.addCase(findById.fulfilled, (state, action) => {
      state.tours = action.payload;
    });
    builder.addCase(addTours.fulfilled, (state, action) => {
      state.tours.push(action.payload);
    });
    builder.addCase(deleteTours.fulfilled, (state, action) => {
      state.tours.splice(action.payload);
    });
    builder.addCase(editTours.fulfilled, (state, action) => {
      state.tours = action.payload;
    });
  },
});
export default toursSlice.reducer;
