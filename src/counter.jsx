import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);//count initial situatuon a 0 thakbe

    const handleAdd =()=>{
        const newCount = count+ 1;
        setCount(newCount);
    }
    const handleReduce =()=>{
        const newCount = count - 1;
        setCount(newCount);
    }




    return (
        <div style={{border: '2px solid pink', borderRadius:'10px', margin:'15px', padding:'12px'}}>
             <h3>counter:{count} </h3>
            
             <button onClick={handleAdd}>Add</button>
             <button onClick={handleReduce}>Reduce</button>
            
             </div>
    )
}