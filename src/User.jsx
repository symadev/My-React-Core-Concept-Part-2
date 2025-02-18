import {  useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);


    useEffect(()=> {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res=> res.json())
        .then (data=>  setUsers(data));

    }, []);

    return (
        <div>
<h3>User:{users.length} </h3> 

{/* //user ar value 10 mane ar vitore data ase 10ta */}
        </div>
    )
}


//1--->declare a state to hold the data
//2--->useeffect with call back and dependancies array

//3--->useeffect function aikahne perameter nei 2 ta .ta holo
//1.callback function and 2.dependancies
//4--->use fetch to load data
//5--->display data in the component
