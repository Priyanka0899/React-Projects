import { useState } from 'react'
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <h1>Counter App</h1>
      <h1>Value is : {count}</h1>
        <div className="btn">
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
