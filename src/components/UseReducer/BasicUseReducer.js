import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter() {
const [count, dispatchCounter] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatchCounter('increment')}>Increment</button>
        <button onClick={() => dispatchCounter('decrement')}>Decrement</button>
        <button onClick={() => dispatchCounter('reset')}>Reset</button>
    </div>
  )
}

export default Counter