import React, { useState } from 'react'

export default function Names() {
    var [names, setNames] = useState([])

    function addName(){
        var name = document.getElementById("txtName").value;
        setNames( [...names, name] )
    }
    
    function deleteName(indexToDelete) {
         setNames( names.filter( (v,index) => index !== indexToDelete ))
    }

    return (
        <>
            <h1>Names</h1>
            Name : <input type="text" id="txtName" />
            <button onClick={addName}>Add</button>
            <p></p>
            {
              // conditional rendering   
              names.length === 0 ? <h3>No names found</h3> :
               <ul>
                {
                    names.map( (n,i) => 
                       <li key={i}>
                          {n}
                          <button onClick={() => deleteName(i)} className="btn-small">Delete</button>
                       </li>)
                }
              </ul>
           } 
        </>
    )
}
