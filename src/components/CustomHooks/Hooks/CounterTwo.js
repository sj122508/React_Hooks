import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
const [count, incrementCounter, decrementCounter, resetCounter] = useCounter(0, 1)
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>

    </div>
  )
}

export default CounterTwo