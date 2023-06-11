import { useState } from "react";

import InputItem from "../InputItem/InputItem";
import ListItem from "../ListItem/ListItem";

import "./style.css";

const Home = () => {
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

  return (
    <div className="home">
      <div className="box">
        <InputItem items={items} setItem={setItems} />
        {items.length !== 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Home;
