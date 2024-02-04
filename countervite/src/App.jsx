import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(10);
  const addvalue= () =>{
    
    if(counter >= 25){
      alert("you have reached the limit")
    }
    else{
     
      setcounter(counter+1);
    }
  }
  const removevalue= () =>{
    
    if(counter <= 0){
      alert("you have reached the limit")
      
    }
    else{
      counter = counter - 1;
      setcounter(counter);
    }
  }
  return (
    <>
    <h1>chai and party</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addvalue}>Increment {counter}</button>
    <br/>
    <br/>
    <button onClick={removevalue}>Decrement {counter}</button>
    <p>footer: {counter}  </p>
   </>  
  )
}

export default App
