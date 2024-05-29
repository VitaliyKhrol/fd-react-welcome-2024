
import React, { Component } from 'react';

class Sibling extends Component {
    render() {
        return (
            <h2>
                This lamp is  {this.props.toogleText}
            </h2>
        );
    }
}

export default Sibling;
