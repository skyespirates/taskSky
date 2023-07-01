import { createContext, useReducer } from "react";
import { nanoid } from "nanoid";
// pre
// i. state type
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type StateType = {
  todos: Todo[];
  count: number;
  isLoading: boolean;
};

// ii. action type
export const ActionType = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
};

// iii. reducer action type
type ReducerAction = {
  type: string;
  payload: string;
};

// 1. initial state
const initialState: StateType = {
  todos: [
    { id: "aaaa", text: "do something", completed: false },
    { id: "bbbb", text: "hey hey not bad", completed: false },
  ],
  count: 999,
  isLoading: false,
};

// 2. reducer
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const newTodo: Todo = {
        id: nanoid(4),
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [newTodo, ...state.todos] };
    case ActionType.DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    case ActionType.TOGGLE_COMPLETED:
      const toggleTodo = (todo: Todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      return {
        ...state,
        todos: state.todos.map(toggleTodo),
      };
    default:
      return state;
  }
};

// 3. create context
export const TodoContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ReducerAction>;
}>({ state: initialState, dispatch: () => {} });

// 4. context provider
type TodoProviderProps = {
  children: React.ReactNode;
};
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
