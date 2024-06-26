
import React from "react";
import './style.css';



class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isGreeting: true
        }
    }


    changeGreeting = () => {
        console.log(this.state)
        this.setState ({
            isGreeting: !this.state.isGreeting
        })
    }

    render(){
        const{isGreeting} = this.state;
        const {userName} =this.props;

        const greetingText = isGreeting ? 'Hello' : 'Bye - bye'

        return(
            <div>
                <h2 onClick={this.changeGreeting}>{greetingText}, {userName}</h2>
            </div>
        )
    }
}

export default Greeting;