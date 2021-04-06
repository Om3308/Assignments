import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 3,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};
function UseReducerDemoComplexState() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div> count- {count.firstCounter} </div>
      <div> count- {count.secondCounter} </div>

      <button
        onClick={() => dispatch({ type: "increment", value: 1 })}
        className="btn btn-primary"
      >
        increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
        className="btn btn-danger"
      >
        decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: "increment", value: 5 })}
        className="btn btn-primary"
      >
        increment_5
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 5 })}
        className="btn btn-danger"
      >
        decrement_5
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: "incrementTwo", value: 1 })}
        className="btn btn-primary"
      >
        increment_2
      </button>
      <button
        onClick={() => dispatch({ type: "decrementTwo", value: 1 })}
        className="btn btn-danger"
      >
        decrement_2
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-success"
      >
        reset
      </button>
    </div>
  );
}

export default UseReducerDemoComplexState;
