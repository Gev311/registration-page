import { useState } from 'react'
import { Counter } from './Counter'
import './App.css'
import { Logos } from './Logos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logos />
      <h1>Vite + React</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
