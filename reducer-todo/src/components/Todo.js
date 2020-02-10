import React from 'react';

const Todo = props => {
    console.log("Props.item in Todo.js: ", props.item);

    const handleToggle = (id) => {
        props.dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    }
    return (
        <div className={`item${props.item.completed ? '-completed' : ''}`} onClick={() => handleToggle(props.item.id)}>
            <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;