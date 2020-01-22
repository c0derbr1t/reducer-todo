import React, { useState } from 'react';

const Todo = props => {
    const [taskId, setTaskId] = useState();
    

    const handleToggle = () => {
        setTaskId(props.item.id);
        props.dispatch({ type: "TOGGLE_COMPLETE", payload: taskId });
    }
    return (
        <div className={`item${props.item.completed ? '-completed' : ''}`} onClick={handleToggle}>
            <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;