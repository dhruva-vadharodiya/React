import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker></Joker>
    </>
  )
}

export default App
