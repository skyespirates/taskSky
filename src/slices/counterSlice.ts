import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  count: 98,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

export const selectCounter = (state: RootState) => state.counter;
