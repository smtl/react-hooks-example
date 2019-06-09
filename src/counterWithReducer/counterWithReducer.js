import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const Counter = props => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter using hooks: useReducer</p>
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
