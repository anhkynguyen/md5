import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTours = createAsyncThunk("tours/getTours", async () => {
  const res = await axios.get("http://localhost:8080/tuors");

  return res.data;
});
export const findById = createAsyncThunk(
  "tours/findByIdTours",
  async (data) => {
    const res = await axios.get("http://localhost:8080/tuors/" + data.id);

    return res.data;
  }
);

export const addTours = createAsyncThunk("tours/addTours", async (data) => {
  const res = await axios.post("http://localhost:8080/tuors", data);
  console.log(data);
  return data;
});

export const deleteTours = createAsyncThunk(
  "tours/deleteTours",
  async (data) => {
    console.log(data);
    const res = await axios.delete("http://localhost:8080/tuors/" + data);

    return data;
  }
);
export const editTours = createAsyncThunk("tours/editTours", async (data) => {
  console.log(5, data);
  await axios.put("http://localhost:8080/tuors/" + data.id, data);
  const res = await axios.get("http://localhost:8080/tuors/");
  return res.data;
});
