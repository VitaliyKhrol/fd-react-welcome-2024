import React from "react";
import PropTypes from 'prop-types';

class Counter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
 

    increment = () => {
        const {step} = this.props;
        this.setState({
            count: this.state.count + step
        });
    }


    decrement = () => {
        const {step} = this.props;
        if (this.state.count) {
            this.setState({
                count: this.state.count - step
            });
        }
    }


    render() {
        return this.props.children(this.increment,this.decrement,this.state)
    }

}

Counter.defaultProps ={
    step: 5
}

Counter.propTypes = {
    step: PropTypes.number
}

export default Counter;