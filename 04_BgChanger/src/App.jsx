import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p> {count}</p>
      <button onClick={() => { setCount(count + 1) }} className='text-3xl border-solid border-2 border-sky-500 rounded-xl p-2 font-bold p12 bg-red '>click</button>
    </>
  )
}

export default App
