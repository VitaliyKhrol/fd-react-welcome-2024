import React, { Component } from 'react';

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: true,
        }
        console.log('constructor')

    }

    componentDidMount() {
        console.log('Компонента була примонтована')
    }

    shouldComponentUpdate(){
        console.log('Чи треба оновитись компоненти?')
        return true
    }

    componentDidUpdate(){
        console.log('Компонента була оновлена')
    }

    componentWillUnmount(){
        console.log('Компонента помре')
    }

    updatingState =()=>{
        this.setState({
            bool:false
        })
    }

    render() {
        console.log('render')
        return (
            <>
                <h1>Tree {this.state.bool} </h1>
                <button onClick={this.updatingState}>Click</button>
            </>

        );
    }
}

export default Tree;
