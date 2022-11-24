import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = {
  count: 0,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      break;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      {state.count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducer;
