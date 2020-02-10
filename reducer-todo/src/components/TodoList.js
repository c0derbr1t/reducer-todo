import React from 'react';

import Todo from './Todo';

const TodoList = ({ state, dispatch }) => {

    // const state = props.state;
    // const dispatch = props.dispatch;

    const handleClear = () => {
        dispatch({ type: "CLEAR_COMPLETED" });
    }

    
    console.log("TodoList state", state);
    return (
        <div>
            {state.map(item => {
                return (
                    <Todo key={item.id} item={item} dispatch={dispatch} />
                )
            })}
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    )
}

export default TodoList;

