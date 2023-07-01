import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";

import InputItem from "../InputItem/InputItem";
import ListItem from "../ListItem/ListItem";

const Home = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className="home flex flex-col items-center m">
      <div className="w-72 mt-6">
        <InputItem />
        {state.todos && (
          <ul className="space-y-1">
            {state.todos.map((item) => {
              return <ListItem key={item.id} todo={item} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
