import { useEffect, useState } from "react";
import store from "../store";
import { productListAction } from "../store/actions/index";

const List = () => {
  const [count, setCount] = useState(store.getState().counter.value);
  useEffect(() => {
    console.log(store.getState());
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
      // setCount(store.getState().counter.value);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(productListAction());
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
