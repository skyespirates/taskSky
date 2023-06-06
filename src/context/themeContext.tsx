import { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from "../@types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
