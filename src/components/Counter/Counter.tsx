import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div className="counter">
      <div className="number">{number}</div>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button disabled={number == 0 ? true : false} onClick={decrement}>
          Decrement
        </button>
        <button className="reset" onClick={() => setNumber(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
