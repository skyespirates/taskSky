import { createContext, useReducer } from "react";

type StateType = {
  theme: null | "dark";
  fontsize: number;
};

type ActionType = {
  type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
  payload?: number;
};

const INITIAL_STATE: StateType = {
  theme: null,
  fontsize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

type Reducer<S, A> = (state: S, action: A) => S;

const reducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "" : "dark" };
    case "CHANGE_FONTSIZE":
      return { ...state, fontsize: action.payload! };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
