import React from 'react';


const TodoItem = (props) => {


    const deleteHandler =()=>{
        console.log(props)
        const {id,deleteCallback}= props;
        deleteCallback(id);
    }

   
    return (
       <li> {props.textItem} <button onClick={deleteHandler}>x</button></li>
    );
}

export default TodoItem;
