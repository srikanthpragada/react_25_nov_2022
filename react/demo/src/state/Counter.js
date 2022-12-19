import React from 'react'

export default function Counter() {
    var value = 0;

    function inc() {
        value++;
        console.log(value);
    }

    return (
        <>
            <h1>Counter</h1>
            <button onClick={inc}>Increment</button>
            <h1 className="text-danger">{value}</h1>
        </>
    )
}
