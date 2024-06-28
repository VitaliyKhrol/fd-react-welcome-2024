
import React, { useEffect, useState } from 'react';

const MouseTracker = () => {

    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [count, setCount] = useState(0);


    
    useEffect(() => {
        console.log('event listener')
        document.body.addEventListener('mousemove', handleMouseMove);

    }, []);


    const handleMouseMove = ({ clientX, clientY }) => {
        setCoordinates({
            x: clientX,
            y: clientY
        });


    }

    const handleClick = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default MouseTracker;
