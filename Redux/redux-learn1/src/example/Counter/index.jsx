import { useEffect, useState } from "react";
import store from "../store";

const Counter = () => {
  const counter = store.getState();
  // const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe((value) => {
      console.log(value);
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({
            type: "PLUS",
          });
          // setCount(count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          store.dispatch({
            type: "MINUS",
          });
          // setCount(count - 1);
        }}
      >
        -
      </button>

      <span>{counter?.value}</span>
    </div>
  );
};

export default Counter;
