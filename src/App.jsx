import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './slices/counterSlice'

function App() {
  let [count, setCount] = useState(0)

  const data = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(data);

  let handleIncrement = () => {
    count++
    setCount(count)
    dispatch(increment(count))
  }
  return (
    <>
      <div className="card">
        <button onClick={handleIncrement}>click</button>
        <h2>{count}</h2>
      </div>
    </>
  )
}

export default App
