import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament(state) {
      state.count++;
    },
    decreament(state) {
      state.count++;
    },
    add(state, action) {
      state.count += +action.payload;
    },
    subtract(state, action) {
      state.count -= +action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
