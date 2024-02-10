import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import counterReducer from "./slices/counterSlice";
import animeReducer from "@/slices/animeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
    anime: animeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
