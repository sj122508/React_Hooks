import React, {useState, useEffect} from 'react'

function UseEffect() {

  const [count, setCount] = useState(0)
  // // Called every single render
  // useEffect(() => {
  //   console.log('Updating state count')
  //   document.title = `You clicked ${count} times`
  // })


  const [name, setName] = useState('')
  // Mimic componentDidUpdate
  // Called every count state updated
  // You can specify the state and props to watch when updated
  useEffect(() => {
    console.log('Updating state count')
    document.title = `You clicked ${count} times`
  }, [count])


  
  // Mimic componentDidMount
  // return function Mimic componentWillUnmount

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component unmounted')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  

  const [counterTimer, setCounterTimer] = useState(0)
  const tick = () => {
    setCounterTimer((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    console.log('useEffect called two')
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  


  return (
    <div>
      <div>
        On Click Hooks
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      </div>
      <div>
        Mouse move Hooks
        Hooks X - {x} Y - {y}
      </div>
      <div>
        {`Timer Tick - ${counterTimer}`}
      </div>

    </div>
  )
}

export default UseEffect