import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(10)
  let [errorMessage, setErrorMessage] = useState("")
  const upCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      setErrorMessage("")
    } else {
      setErrorMessage("Counter can't be more than 20 ")
    }

  }
  const lowCounter = () => {

    if (counter > 0) {
      setCounter(counter - 1)
      setErrorMessage("")
    } else {
      setErrorMessage("Counter can't be less than 0 ")
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h4>from 0 to 20</h4>
      <h2>counter count = {counter}</h2>
      <button onClick={upCounter}>Counter +1</button>
      <button onClick={lowCounter}>Counter -1</button>
      <p>{errorMessage}</p>
    </>
  )
}

export default App
