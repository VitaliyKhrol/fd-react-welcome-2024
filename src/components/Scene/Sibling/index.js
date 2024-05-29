
import React from 'react';

const Sibling = (props) => {
        
    return (
        <h2>
                This lamp is  {props.toogleText? 'on': 'off'}
        </h2>
    );
}


export default Sibling;
