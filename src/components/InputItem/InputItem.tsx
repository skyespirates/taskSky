import { useRef } from "react";
import { useContext } from "react";
import { TodoContext, ActionType } from "../../context/todoContext";

const InputItem = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const text = inputRef.current?.value.trim();
    if (text) {
      dispatch({ type: ActionType.ADD_TODO, payload: text });
      inputRef.current!.value = "";
    }
  };

  return (
    <form className="flex items-center space-x-2 mb-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="border shadow-sm outline-none px-2 py-2 rounded flex-1"
        type="text"
        placeholder="Add Todo..."
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
      >
        <i className="bx bx-plus"></i>
      </button>
    </form>
  );
};

export default InputItem;
