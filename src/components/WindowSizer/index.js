import React, { useEffect, useState } from 'react';

const WindowSizer = () => {

    const [coordinates, setCoordinates] = useState({ x: window.innerWidth, y: window.innerHeight })

    useEffect(() => {
        window.addEventListener('resize', resizeHadler);
        return () => {
            window.removeEventListener('resize', resizeHadler)
        }
    }, [])

    const resizeHadler = () => {
        setCoordinates({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }

    return (
        <>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
        </>

    )

}

export default WindowSizer;
