import { useState } from "react"

export default function Count () {
    const [count, setCount] = useState (0);



    const handleAdd = () => {
        const newCount = count +1;
        setCount(newCount);
        
    }

    const handdleSubtract = ()=> {
        const newCount = count -1;
        setCount (newCount);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handdleSubtract}>Subtract</button>
        </div>
    )
}