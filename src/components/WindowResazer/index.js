import React, { Component } from 'react';

class WindowResazer extends Component {

constructor (props){
    super(props)
    this.state={
        x: window.innerWidth,
        y: window.innerHeight
    }
}

componentDidMount(){
    window.addEventListener('resize',this.resizeHadler)
}

componentWillUnmount(){
    window.removeEventListener('resize',this.resizeHadler)
}

resizeHadler=()=>{
    this.setState ({
        x: window.innerWidth,
        y: window.innerHeight
    })
}


    render() {
        const {x,y} = this.state
        return (
            <div>
                <section>{x}</section>
                <section>{y}</section>
                
            </div>
        );
    }
}

export default WindowResazer;
