import { useState } from 'react'

import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("black")
  return (
    <div className='h-screen w-full' style={{backgroundColor:bgColor}}> 
      <div className='w-3/4 bg-white flex flex-wrap justify-center fixed mx-auto bottom-10  left-0 right-0 rounded-full'>
        <button onClick={()=>setBgColor("red")} className=' p-2 m-1 bg-red-500 rounded-full w-32 ' >Red</button>
        <button onClick={()=>setBgColor("black")} className=' p-2 m-1 bg-black rounded-full w-32 ' >Black</button>
        <button onClick={()=>setBgColor("violet")} className=' p-2 m-1 bg-violet-500 rounded-full w-32 ' >Violet</button>
        <button onClick={()=>setBgColor("pink")} className=' p-2 m-1 bg-pink-500 rounded-full w-32 ' >Pink</button>
        <button onClick={()=>setBgColor("gray")} className=' p-2 m-1 bg-gray-500 rounded-full w-32 ' >Gray</button>
      </div>

    </div>
  )
}

export default App
