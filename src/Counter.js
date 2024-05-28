import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }


    decrement = () => {
        if (this.state.count) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }

}

export default Counter;