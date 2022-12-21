import React, { useState } from 'react'

export default function IncDecCounter() {
    var [value, setValue] = useState(0)

    function inc() {
        setValue(value + 1)
    }

    function dec() {
        setValue(value - 1)
    }

    function resetCounter() {
        setValue(0)
    }
    return (
        <>
            <h1>Counter</h1>
            <IncButton increment={inc} />
            &nbsp;
            <DecButton decrement={dec} />
            &nbsp;
            <ResetButton reset={resetCounter} />
            <h1 className="text-danger">{value}</h1>
        </>
    )
}


function IncButton({ increment }) {
    return (
        <button onClick={increment}>+</button>
    )
}

function DecButton({ decrement }) {
    return (
        <button onClick={decrement}>-</button>
    )
}

function ResetButton({ reset }) {
    function resetCounter() {
        if (window.confirm("Do you want to reset counter?"))
            reset(); // call function of parent component 
    }
    return (
        <button onClick={resetCounter}>Reset</button>
    )
}