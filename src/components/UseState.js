// rfce
import React, {useState} from 'react'

function UseState() {
    const initialCount = 0;
    // Array destructuring , feature in ES6
    const [count, setCount] = useState(initialCount); // useState number
    const [name, setName] = useState({firstName: "", lastName: ""}); // useState object
    const [items, setItems] = useState([]) // useState array

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const addItem = () => {
        console.log(items, 'ITEMS')
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <div>
            <h6>Use state with nunmber</h6>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
        <div>
            <h6>Use state with object</h6>
            <form>
                <input 
                    type="text" 
                    value={name.firstName} 
                    onChange={e => setName({...name, firstName: e.target.value})}/> 
                <input 
                    type="text" 
                    value={name.lastName} 
                    onChange={e => setName({...name, lastName: e.target.value})}/>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
            </form>
        </div>
        <div>
            <h6>Use state with array</h6>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default UseState