import { useContext } from "react";
import { TodoContext, ActionType } from "../../context/todoContext";
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
type ListItemProps = {
  todo: Todo;
};

const ListItem = ({ todo }: ListItemProps) => {
  const { dispatch } = useContext(TodoContext);
  const { id, text, completed } = todo;

  return (
    <li className="flex justify-between border rounded px-2 py-1">
      <span className={`${completed ? "line-through" : ""}`}>{text}</span>
      <span className="text-xl space-x-1">
        <i
          onClick={() =>
            dispatch({ type: ActionType.TOGGLE_COMPLETED, payload: id })
          }
          className="bx bx-check cursor-pointer text-green-500 hover:text-green-600"
        ></i>
        <i
          onClick={() =>
            dispatch({ type: ActionType.DELETE_TODO, payload: id })
          }
          className="bx bxs-trash-alt cursor-pointer text-violet-500 hover:text-violet-600"
        ></i>
      </span>
    </li>
  );
};

export default ListItem;
