import React, { Component } from 'react'

export default class Wish extends Component {
  constructor() {
    super()
    this.message = "Good Evening!";
  }
  
  render() {
    return (
      <h1>{this.message}</h1>
    )
  }
}
