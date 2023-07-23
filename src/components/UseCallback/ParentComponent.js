import React, {useState, useCallback} from 'react'
import Button from './Button'
import Title from './Title'
import Count from './Count'

function ParentComponent() {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(50000)

    const handleIncrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 
     
    const handleIncrementSalary = useCallback(() => {
         setSalary(salary + 1000)
    }, [salary]) 



    return (
        <div>
            <Title />
            <Button handleClick={handleIncrementAge}>Increment Age</Button>
            <Count text='Age' count={age} />
            <Button handleClick={handleIncrementSalary}>Increment Salary</Button>
            <Count text='Salary' count={salary} />
        </div>
    )
}

export default ParentComponent