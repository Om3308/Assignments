import React,{useReducer} from 'react'
const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1
    case 'reset':
      return initialstate
    default:
      return state
  }
}

function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return(
      <div>
          <h2>Counter Component</h2>
          <div> count: {count}</div>
          <button  onClick={() =>dispatch('increment')} className="btn btn-primary">Increment</button>
          <button  onClick={() =>dispatch('decrement')} className="btn btn-danger">Decrement</button>
          <button  onClick={() =>dispatch('reset')} className="btn btn-success">Reset</button>
      </div>
  )
}
export default UseReducerDemo;
