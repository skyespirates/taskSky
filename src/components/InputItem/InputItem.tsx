import { useState } from "react";
import "./style.css";
import { nanoid } from "nanoid";
type Item = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type InputItemProps = {
  items: Item[];
  setItem: React.Dispatch<React.SetStateAction<Item[]>>;
};

const InputItem = ({ items, setItem }: InputItemProps) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (!todo || todo.trim().length === 0) {
      setTodo("");
      return;
    }
    setItem([...items, { id: nanoid(10), text: todo, isCompleted: false }]);
    setTodo("");
  };

  return (
    <form className="add__todo" onSubmit={handleSubmit}>
      <input
        className="input__todo"
        type="text"
        placeholder="Add Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="add__button">
        <i className="bx bx-plus"></i>
      </button>
    </form>
  );
};

export default InputItem;
