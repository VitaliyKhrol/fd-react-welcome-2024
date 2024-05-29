import React, { Component } from 'react';
import Lamp from './Lamp';
import Sibling from './Sibling';

class Scene extends Component {
    constructor(props){
        super(props);
        this.state ={
            toogler: true,
        }
    }


    callbackState =()=>{
       this.setState({
        toogler:!this.state.toogler
       })

    }
    
    
    render() {
        return (
            <>
              <Lamp toogleState={this.state.toogler} callbackParent ={this.callbackState}/>
              <Sibling toogleText = {this.state.toogler}/>
            </>
      
        );
    }
}

export default Scene;

