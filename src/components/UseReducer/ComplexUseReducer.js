import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function ComplexUseReducer() {
const [count, dispatchCounter] = useReducer(reducer, initialState)
  return (
    <div>
        <div>First Count - {count.firstCounter}</div>
        <div>
            <button onClick={() => dispatchCounter({type:'increment', value:1})}>Increment</button>
            <button onClick={() => dispatchCounter({type:'decrement', value:1})}>Decrement</button>
            <button onClick={() => dispatchCounter({type:'increment', value:5})}>Increment by 5</button>
            <button onClick={() => dispatchCounter({type:'decrement', value:5})}>Decrement by 5</button>
        </div>

        <div>Second Count - {count.secondCounter}</div>
        <div>
            <button onClick={() => dispatchCounter({type:'increment2', value:1})}>Increment Counter 2</button>
            <button onClick={() => dispatchCounter({type:'decrement2', value:1})}>Decrement Counter 2</button>
            
        </div>
        <button onClick={() => dispatchCounter({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ComplexUseReducer


