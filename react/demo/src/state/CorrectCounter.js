import React, { useState } from 'react'

export default function CorrectCounter() {
    var [value, setValue ] = useState(0)
    var [increment, setIncrement ] = useState(1)

    function inc() {
        setValue(value + increment) 
        //console.log(value);
    }

    function dec() {
        setValue(value - increment) 
        //console.log(value);
    }

    function updateIncrement() {
        var value = document.getElementById("incValue").value;
        setIncrement(parseInt(value))
    }
    return (
        <>
            <h1>Counter</h1>
            Increment <input type="number" defaultValue="1" id="incValue" />
            <button onClick={updateIncrement}>Set Increment</button>
            <p></p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <h1 className="text-danger">{value}</h1>
        </>
    )
}
