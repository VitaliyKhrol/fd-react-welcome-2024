import React, { Component } from 'react';


class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date(0,0,0,0,0,0,0)
        }
        this.intervalId=null;
    }

    start =()=>{
        this.intervalId = setInterval(()=>{
         const {time} =this.state;
         const date = new Date(time.getTime());
         const seconds = time.getSeconds();
         date.setSeconds(seconds+1)
             this.setState({
                time: date
             })

        },1000 );
     
    }

    componentDidMount(){
        // this.start();
    }

    stop=()=>{
         clearInterval(this.intervalId)
       }

     componentWillUnmount(){
        clearInterval(this.intervalId)
     }  

    
    render() {
        const {time} =this.state;
        return (
            <div>
                <h1>{time.toTimeString()}</h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        );
    }
}

export default Timer;
