import { useState } from 'react'
import './App.css'
import GaleriaDeImagens from './Components/Galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GaleriaDeImagens/>
    </>
  )
}

export default App
