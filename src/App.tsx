import { useState, useContext } from "react";
import InputItem from "./components/InputItem/InputItem";
import ListItem from "./components/ListItem/ListItem";
import { ThemeContextType } from "./@types/theme";
import { ThemeContext } from "./context/themeContext";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { id: "sdfdsafds", text: "Running on track", isCompleted: false },
    { id: "dfadsfds", text: "Swimming on pool", isCompleted: true },
  ]);

  const handleDelete = (id: string): void => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCompleted = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  // Theme Change
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme === "dark" ? "light-theme" : ""}`}>
      <i
        onClick={handleThemeChange}
        className={`bx ${
          theme === "light" ? "bxs-sun" : "bxs-moon"
        } change-theme`}
        id="theme-button"
      ></i>
      <div className="box">
        <InputItem items={items} setItem={setItems} />
        <div className="list__todo">
          {items.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                text={item.text}
                isComplete={item.isCompleted}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
