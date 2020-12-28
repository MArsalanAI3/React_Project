import React, { useState } from 'react';
import Text from './text'
import Button from './Button'
import './style.css'

const Counter = ({initialValue= 0}) => {

    let [count, setCount] = useState(initialValue)
    return (
        <>
            <Text value={"Counter APP"}
                style={{ fontSize: "34px", fontWeight: "bold" }} />


            <Text value={`Value of Counter is: ${count}`}
                style={{ fontSize: "20px"}} />

            <Button value={"Increment"}
            className="button_inc"
                onClick={() => setCount(count + 1)} />

            <Button value={"Decrement"}
            className="button_dnc"
                onClick={() => setCount(count - 1)} />
        </>
    )
}


export default Counter;