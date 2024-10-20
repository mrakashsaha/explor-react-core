import { useEffect, useState } from "react"

export default function User () {
    const [users, setUser] = useState([]);
    useEffect (()=> {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUser(data));
    }, [])
    return (
        <div>
            <h3>User: {users.length}</h3>
        </div>
    )
}


//  1. Declear a state to hold the data;
//  2. Use effect with callback and dependecy array
