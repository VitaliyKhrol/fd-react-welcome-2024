import React, { Component } from 'react';
import './style.css'


class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true,
        }
    }


    toogle= ()=>{
        this.setState({
            on:!this.state.on 
        });
        this.props.callbackParent(this.state.on ? 'off' : 'on')
    }




    render() {
        const classNames = this.state.on ? 'lamp-on' : 'lamp-off';
        return (
            <>
                <div className={classNames}></div>
                <p>{this.props.lampText}</p>
                <button onClick={this.toogle}>Toggle</button>
            </>

        );
    }
}

export default Lamp;
