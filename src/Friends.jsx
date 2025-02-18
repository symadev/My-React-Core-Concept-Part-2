import Friend from "./Friend";


import {  useEffect, useState } from "react"
import './Friends.css'
export default function Friends(){

    const [friends, setFriends] = useState([]);


    useEffect(()=> {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res=> res.json())
        .then (data=>  setFriends(data));

    }, []);

    return (
        <div className='box'>
<h3>Friend Name:{friends.length} </h3> 
{
   friends.map(friend=> <Friend friend={friend}></Friend>)
}

{/* //user ar value 10 mane ar vitore data ase 10ta */}
        </div>
    )
}