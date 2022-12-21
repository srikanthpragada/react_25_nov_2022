import React, {Component } from 'react'

export default class CounterClass extends Component {
    constructor() {
        super()
        this.state = { counter : 0, increment : 5 }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ counter : this.state.counter + this.state.increment })
        console.log(this.state)
    }

    decrement() {
        this.setState({ counter: this.state.counter - this.state.increment })
    }


    render() {
        return (
            <>
                <h1>Counter</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1 className="text-primary">{this.state.counter}</h1>
            </>
        )
    }
}
