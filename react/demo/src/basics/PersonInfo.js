import React, { Component } from 'react'

export default class PersonInfo extends Component {
  // constructor(props) {
  //   super()
  //   this.name = props.name
  //   this.email = props.email
  // }
  render() {
    return (
      <>
        <h2>
          Name : {this.props.name}
          <br />
          Email : {this.props.email}
        </h2>
      </>
    )
  }
}
