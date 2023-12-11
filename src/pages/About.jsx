import React from 'react'
import { useSelector } from 'react-redux'





const About = () => {

    const data = useSelector((state) => state.counter.value)

    console.log(data);

    return (
        <>
            <h2>this is aboiut</h2>
            <h3>data is coming from home page: {data}</h3>

        </>
    )
}

export default About