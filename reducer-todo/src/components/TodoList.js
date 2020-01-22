import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    const state = props.state;
    const dispatch = props.dispatch;

    
    console.log("TodoList state", state);
    return (
        <div>
            {props.state.map(item => {
                return (
                    <Todo key={item.id} item={item} dispatch={dispatch} />
                )
            })}
            <button >Clear Completed</button>
        </div>
    )
}

export default TodoList;
