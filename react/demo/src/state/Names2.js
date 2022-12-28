import React, { useState } from 'react'

export default function Names2() {
    var [names, setNames] = useState([])

    function deleteName(indexToDelete) {
        setNames(names.filter((v, index) => index !== indexToDelete))
    }

    function addName(name) {
        setNames([...names, name])
    }

    return (
        <>
            <h1>Names</h1>
            <AddName names={names} addName={addName} />
            <p></p>
            <ListNames names={names} deleteName={deleteName} />
        </>
    )
}

function AddName({ names, addName }) {
    var [message, setMessage] = useState('')
    var [name, setName] = useState('')

    function addNewName() {
        setMessage("");
        // find out whether name is unique 
        if (names.includes(name))
            setMessage("Sorry! Duplicate Name!");
        else
            addName(name)
    }

    function updateName(e) {
        setName(e.target.value)
    }

    return (
        <>
            Name : <input type="text" id="txtName" value={name} 
                          onChange={updateName}/>
            <button onClick={addNewName}
                    disabled={name.length === 0}>Add</button>
            <span className="text-danger">{message}</span>
        </>

    )
} // AddName


function ListNames({ names, deleteName }) {
    function deleteSelectedName(idx) {
        if (window.confirm("Do you want to delete?"))
            deleteName(idx)
    }

    return (
        <>
            {
                // conditional rendering   
                names.length === 0 ? <h3>No names found</h3> :
                    <ul>
                        {
                            names.map((n, i) =>
                                <li key={i}>
                                    {n}
                                    &nbsp;
                                    <button onClick={() => deleteSelectedName(i)}
                                        className="btn btn-link">Delete</button>
                                </li>)
                        }
                    </ul>
            }
        </>
    )
}