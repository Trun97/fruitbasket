import './Button.css'
import {useState} from "react";
import React from 'react';


function Button() {
    const [sum, setSum] = useState(0);
    // const reSet =() => {
    //     setSum(0);
    // };
    return (
        <>
            <button type="button" onClick={() => setSum(sum + 1)}>+</button>
            <span>{sum}</span>
            <button type="button" onClick={() => sum > 0 && setSum(sum - 1)}>-</button>
        </>
    )
        ;
}

export default Button;

