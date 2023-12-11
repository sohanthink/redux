import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../slices/counterSlice'
import { Link, NavLink } from 'react-router-dom'
import About from './About'

const Home = () => {

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
            <h2>This is Home</h2>
            <div className="card">
                <button onClick={handleIncrement}>click</button>
                <h2>{count}</h2>
            </div>
            <Link to='/about'>About</Link>
        </>
    )
}

export default Home