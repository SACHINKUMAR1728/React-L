import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: 'sachin',
    age: 25
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <div  >
      <Card channel="sachinandcode" someobj={myobj}/>
      <Card channel="chaiandcode"/>
      </div>

    </>
  )
}

export default App
