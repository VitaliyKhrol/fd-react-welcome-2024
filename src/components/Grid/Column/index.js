import React from 'react';
import './Column.css'

const Column = (props) => {
    const{colNum, children} = props;
    return (
        <div className={`col-${colNum} col`}>
            {children}
            
        </div>
    );
}

export default Column;
