import React from 'react';
import SubParent from './SubParent'

const Parent = (props) => {
    return (
        <div style={{border:'2px solid black', padding:'20px'}}>
             <p>Parent</p>
            <SubParent />
        </div>
    );
}

export default Parent;
