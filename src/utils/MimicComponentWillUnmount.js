import React, {useState} from 'react'
import UseEffect from '../components/UseEffect'

function MimicComponentWillUnmount() {

    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <UseEffect />}
    </div>
  )
}

export default MimicComponentWillUnmount