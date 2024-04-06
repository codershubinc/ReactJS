import { useState } from 'react'
import './App.css'

function App() {
 const [curruncy, setCurruncy] = useState('USD')
 const [amount, setAmount] = useState(0)

  return (
    <>
      <div className='flex flex-wrap ' >
        <button className="w-12 h-8 bg-gray-800  rounded-lg hover:rounded-xl border-2 border-solid border-gray-800  transition-all   hover:bg-slate-600"> Click </button>
      </div>
    </>
  )
}

export default App
