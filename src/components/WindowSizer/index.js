import React, { useEffect, useState } from 'react';
import useWindowSizer from '../../hooks/useWindowSizer';

const WindowSizer = (props) => {

    const {coordinates} = useWindowSizer();
    console.log(coordinates)

    return (
        <>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
        </>

    )

}

export default WindowSizer;
