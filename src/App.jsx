import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import APIdata from './Components/APIdata'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <br />
      <APIdata/>
    </>
  )
}

export default App
