import React from 'react'

export default function ShowDateTime() {
  var cd = new Date()
  return (
    <h1>{cd.toString()}</h1>
  )
}
