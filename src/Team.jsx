import { useState } from "react"

export default function Team () {

    const [number, setNumber] = useState (11);

    const handleAdd = ()=> {
        const updateNumber = number+1;
        setNumber (updateNumber);
    }

    const handleRemove = () => {
        
        setNumber (number -1);
    }


    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    
    return (
        <div>
            <h3 style={teamStyle}>Player: {number}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}