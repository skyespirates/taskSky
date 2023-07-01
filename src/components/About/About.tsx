import { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectTodo,
  addTodo,
  deleteTodo,
  clearTodo,
  toggleCompleted,
} from "../../slices/todoSlice";
const About = () => {
  const { todos } = useSelector(selectTodo);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const text = inputRef.current?.value.trim();
    if (text) {
      dispatch(addTodo(text));
      inputRef.current!.value = "";
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2 my-4 w-72"
      >
        <button
          onClick={() => dispatch(clearTodo())}
          className="text-2xl border px-1 rounded bg-purple-400 text-white hover:bg-purple-500"
        >
          <i className="bx bxs-trash"></i>
        </button>
        <input
          ref={inputRef}
          type="text"
          className="border outline-none px-2 py-1 rounded flex-1 "
        />
        <button className="text-2xl border px-1 rounded bg-orange-400 text-white hover:bg-orange-500">
          <i className="bx bx-plus"></i>
        </button>
      </form>
      <ul className="space-y-2 w-72">
        {todos &&
          todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="border px-2 py-1 rounded flex justify-between items-center shadow-sm"
              >
                <span className={`${todo.completed ? "line-through" : ""}`}>
                  {todo.activity}
                </span>
                <span className="text-xl space-x-1">
                  <i
                    onClick={() => dispatch(toggleCompleted(todo.id))}
                    className="bx bx-check cursor-pointer text-green-400 hover:text-green-500"
                  ></i>
                  <i
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="bx bxs-trash-alt cursor-pointer text-red-400 hover:text-red-500"
                  ></i>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default About;
