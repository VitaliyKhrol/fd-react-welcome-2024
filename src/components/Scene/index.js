import React, { Component } from 'react';
import Lamp from './Lamp';
import Sibling from './Sibling';

class Scene extends Component {
    constructor(props){
        super(props);
        this.state ={
            toogler: 'on',
        }
    }


    callbackState =(data)=>{
       this.setState({
        toogler:data
       })

    }
    
    
    render() {
        return (
            <>
              <Lamp lampText='cool lamp' callbackParent ={this.callbackState}/>
              <Sibling toogleText = {this.state.toogler}/>
            </>
      
        );
    }
}

export default Scene;

