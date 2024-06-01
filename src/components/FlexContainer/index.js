import React from 'react';

const FlexContainer = (props) => {


    const { fd, jc, ai, children } = props;
    const styles = {
        display:'flex',
        border: '1px solid black',
        flexDirection: fd,
        justifyContent:jc,
        alignItems: ai 
    }

return (
    <div style={styles}>
        {children}

    </div>
);

}
export default FlexContainer;

