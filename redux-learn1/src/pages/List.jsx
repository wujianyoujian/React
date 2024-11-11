import { useEffect, useState } from "react";
import store from "../store";

const List = () => {
  const [count, setCount] = useState(store.getState().counter.value);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // console.log(store.getState().counter.value);
      setCount(store.getState().counter.value);
    });
    return unsubscribe;                                                                                                                                                          f r
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({ type: "PLUS", payload: 1 });
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          store.dispatch({ type: "MINUS", payload: 1 });
        }}
      >
        -
      </button>
    </div>
  );
};

export default List;
