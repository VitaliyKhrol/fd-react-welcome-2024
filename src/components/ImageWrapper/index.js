import React from 'react';




const ImageWrapper = (props) => {
const {children, width, height, ...rest} = props

const imageWrapper ={
    width: width,
    height: height,
    overflow: 'hidden',
    objectFit: 'cover'
    }


    return (
        <div style ={imageWrapper} {...rest}>
            {children}
        </div>
    );
}

export default ImageWrapper;
