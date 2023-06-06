import "./style.css";

type ListItemProps = {
  id: string;
  text: string;
  isComplete: boolean;
  handleDelete: (text: string) => void;
  handleCompleted: (id: string) => void;
};

const ListItem = ({
  id,
  text,
  isComplete,
  handleDelete,
  handleCompleted,
}: ListItemProps) => {
  return (
    <li className={`list__item`} onClick={() => handleCompleted(id)}>
      <span className={`${isComplete ? "completed" : ""}`}>{text}</span>
      <button className="delete__button" onClick={() => handleDelete(id)}>
        <i className="bx bxs-trash-alt"></i>
      </button>
    </li>
  );
};

export default ListItem;
