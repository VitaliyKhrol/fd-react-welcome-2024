import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = (props) => {


    const deleteHandler = () => {
        const { id, deleteCallback } = props;
        deleteCallback(id);
    }


    return (
        <li> {props.textItem} <button onClick={deleteHandler}>x</button></li>
    );

}

TodoItem.defaultProps = {
    textItem: 'Default text',
    deleteCallback: () => {},
    id: 0
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    textItem: PropTypes.string,
    deleteCallback: PropTypes.func.isRequired
}


export default TodoItem;
