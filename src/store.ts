import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
