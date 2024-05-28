
import React from "react";


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
        const {userName, userF} =this.props;

        const greetingText = isGreeting ? 'Hello' : 'Go to'

        return(
            <div>
                <h2 onClick={this.changeGreeting}>{greetingText}, {`${userName}  ${userF}`}</h2>
            </div>
        )
    }
}

export default Greeting;