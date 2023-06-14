import { createContext, useReducer } from "react";

type StateType = {
  theme: "light" | "dark";
  fontsize: number;
};

type ActionType = {
  type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
  payload?: number;
};

const INITIAL_STATE: StateType = {
  theme: "dark",
  fontsize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
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
