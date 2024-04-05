import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button> jjj</button>
        <img src={reactLogo} className="logo w-10" alt="logo" />
      </div>
    </>
  )
}

export default App
