import React from 'react'

export default function Hello(props) {
  
    return (
        <>
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.email}</h2>
        </>
    )
}
