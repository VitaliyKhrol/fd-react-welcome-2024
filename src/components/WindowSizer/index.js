import React, { Component } from 'react';

class WindowSizer extends Component {

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
        return this.props.children(this.state)
    }
}

export default WindowSizer;
