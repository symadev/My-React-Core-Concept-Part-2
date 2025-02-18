import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './User'
import Friends from './Friends'
function App() {
  function handleClick(){
    alert('button clicked');

  }

  const AddFive = (num) =>{
    alert(num+5);
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concept</h1>
       <Users></Users>  
        <Friends></Friends> 
         
         <Counter></Counter>


     <button onClick ={handleClick}>Click Me</button>
     
     <button  onClick={() =>{alert('button third clicked');}}>Third</button>
     {/* vejal process */}

      <button  onClick={() => AddFive(5)}>Four</button>
    </>
  )
}

export default App
