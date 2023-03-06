import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getLaptops = createAsyncThunk("laptops/getLaptops", async () => {
  const res = await axios.get("http://localhost:8080/laptops");

  return res.data;
});

export const addLaptops = createAsyncThunk(
  "laptops/addLaptops",
  async (data) => {
    const res = await axios.post("http://localhost:8080/laptops", data);

    return data;
  }
);

export const deleteLaptops = createAsyncThunk(
  "laptops/deleteLaptops",
  async (data) => {
    const res = await axios.delete("http://localhost:8080/laptops/" + data);
    console.log(res);
    return data;
  }
);
export const editLaptops = createAsyncThunk(
  "laptops/editLaptops",
  async (data) => {
    console.log(4, data);
    await axios.put("http://localhost:8080/laptops/" + data.idLaptop, data);
    const res = await axios.get("http://localhost:8080/laptops");
    return res.data;
  }
);
