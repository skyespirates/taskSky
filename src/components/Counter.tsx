type CounterProps = {
  children: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ children, setCount }: CounterProps) => {
  return (
    <div className="container">
      <span className="counter">{children}</span>
      <button
        className="minus"
        onClick={children > 0 ? () => setCount((prev) => prev - 1) : undefined}
      >
        <i className="bx bx-minus bx-lg"></i>
      </button>
      <button
        className="plus"
        onClick={children < 9 ? () => setCount((prev) => prev + 1) : undefined}
      >
        <i className="bx bx-plus bx-lg"></i>
      </button>
    </div>
  );
};

export default Counter;
