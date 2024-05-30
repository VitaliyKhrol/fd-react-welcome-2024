import React from 'react';


const TodoItem = (props) => {
    console.log(props)
    return (
       <li> {props.textItem}</li>
    );
}

export default TodoItem;
