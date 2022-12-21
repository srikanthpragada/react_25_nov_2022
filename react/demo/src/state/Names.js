import React, { useState } from 'react'

export default function Names() {
    var [names, setNames] = useState([])
    var [message, setMessage] = useState('')

    function addName() {
        setMessage("");
        var name = document.getElementById("txtName").value;
        // find out whether name is unique 
        if (names.includes(name))
            setMessage("Sorry! Duplicate Name!");
        else
            setNames([...names, name]);
    }

    function deleteName(indexToDelete) {
        if (window.confirm("Do you want to delete?"))
            setNames(names.filter((v, index) => index !== indexToDelete))
    }

    return (
        <>
            <h1>Names</h1>
            Name : <input type="text" id="txtName" />
            <button onClick={addName}>Add</button>
            <span className="text-danger">{message}</span>
            <p></p>
            {
                // conditional rendering   
                names.length === 0 ? <h3>No names found</h3> :
                    <ul>
                        {
                            names.map((n, i) =>
                                <li key={i}>
                                    {n}
                                    &nbsp;
                                    <button onClick={() => deleteName(i)} className="btn btn-link">Delete</button>
                                </li>)
                        }
                    </ul>
            }
        </>
    )
}
