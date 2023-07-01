import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { nanoid } from "nanoid";

type Todo = {
  id: string;
  activity: string;
  completed: boolean;
};

type StateType = {
  todos: Todo[];
  loading: boolean;
  error: any;
};

const initialState: StateType = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") as string)
    : [],
  loading: false,
  error: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: nanoid(4),
        activity: payload,
        completed: false,
      };
      const allTodos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos") as string)
        : [];
      const newTodos = [newTodo, ...allTodos];
      state.todos = newTodos;
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      const storageTodos = JSON.parse(
        localStorage.getItem("todos") as any
      ) as Todo[];
      const newStorageTodos = storageTodos.filter(
        (todo) => todo.id !== payload
      );
      localStorage.setItem("todos", JSON.stringify(newStorageTodos));
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    clearTodo: (state) => {
      state.todos = [];
      localStorage.clear();
    },
    toggleCompleted: (state, { payload }: PayloadAction<string>) => {
      const storageTodos = JSON.parse(
        localStorage.getItem("todos") as string
      ) as Todo[];
      const newStorageTodos = storageTodos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newStorageTodos));
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, clearTodo, toggleCompleted } =
  todoSlice.actions;

export const selectTodo = (state: RootState) => state.todos;

export default todoSlice.reducer;
