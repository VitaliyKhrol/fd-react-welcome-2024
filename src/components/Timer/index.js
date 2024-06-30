
import { format, addSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react';

const Timer = (props) => {
    const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
    const [isRunning, setRunning] = useState(false);


    useEffect(() => {
        let intervalId= null;
        if (isRunning) {
            intervalId = setTimeout(() => {
                const newdate = addSeconds(time, 1)
                setTime(newdate)
            }, 1000);
        }
        return ()=>{
            clearTimeout(intervalId)
        }
    },)


    const clear = () => {
        setTime(new Date(0, 0, 0, 0, 0, 0, 0))
    }

    const switchRunning = () => {
        setRunning(!isRunning)

    }

    return (
        <div>
            <h1>{format(time,'HH:mm:ss')}</h1>
            <button onClick={switchRunning}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={clear}>CLEAR</button>
        </div>
    );

}

export default Timer;
