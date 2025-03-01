import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => {
        if (count < 20) {
          setCount(count + 1)
        }
      }}>Increment till 20</button>
      <br />
      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}>Decrement till 0</button>

      <button onClick={() => setCount(0)}>Reset</button>
      <p><footer>Copyright &copy; 2025 Counter App  {count}</footer></p>
    </>
  )
}

export default App
