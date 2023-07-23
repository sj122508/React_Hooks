import {useState} from 'react'

function useCounter(initialCount = 0, value = 0) {
    const [count, setCounter] = useState(initialCount)

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + value)
  }

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - value)
  }

  const resetCounter = () => {
    setCounter(initialCount)
  }

  return [count, incrementCounter, decrementCounter, resetCounter ]
}

export default useCounter