import React, { Component } from 'react'

export default class WishEvents extends Component {
  constructor(props) {
    super()
    this.message = props.message;
    this.showMessage =  this.showMessage.bind (this);
  }
  showMessage() {
    alert(this.message)
  }

  render() {
    return (
       <button onClick={this.showMessage}>Show Message</button>
    )
  }
}
