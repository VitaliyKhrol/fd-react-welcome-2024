import React, { Component } from 'react';
import { format, addSeconds } from 'date-fns';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0, 0, 0, 0, 0, 0, 0),
            isRunning: true,
        }
        this.intervalId = null;

    }

    start = () => {
            this.intervalId = setInterval(() => {
            const { time } = this.state;
            const newdate = addSeconds(time, 1)
            this.setState({
                time: newdate,
                isRunning:false,
            })
        }, 1000);
      }

    
    stop = () => {
        clearInterval(this.intervalId)
        this.setState({
            isRunning:true,
        })
    }

    clickHandler=()=>{
        const {isRunning } = this.state;
        if (isRunning){
            this.start()
        } else {this.stop()}

    }

    clear = ()=>{
        this.stop();
        this.setState({
            time: new Date(0, 0, 0, 0, 0, 0, 0),
        })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const { time,isRunning} = this.state;
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={this.clickHandler}>{isRunning ? 'Start' : 'Stop'}</button>
                <button onClick={this.clear}>CLEAR</button>
            </div>
        );
    }
}

export default Timer;
