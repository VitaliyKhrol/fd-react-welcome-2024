
import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const handleClick = () => {
            setCount((count) => count + step)
        }
        console.log('effect created')
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [step]);

    const handleStep = ({ target: { name, value } }) => {
        setStep(Number(value));
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <input type='text' name='step' value={step} onChange={handleStep} />
        </div>
    );
}

export default Counter;
