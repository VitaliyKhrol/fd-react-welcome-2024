import React from 'react';
import './style.css'



function Lamp(props){

    const toogle = ()=>{
        props.callbackParent()
    }

 const classNames = props.toogleState ? 'lamp-on' : 'lamp-off';
    return (
        <>
            <div className={classNames}></div>
            <button onClick={toogle}>Toggle</button>
        </>

    );
}


export default Lamp;
