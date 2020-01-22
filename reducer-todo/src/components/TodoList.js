import React, { useState, useEffect, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    console.log("outside", state);
    useEffect(() => {
        console.log("useEffect", state);
    }, [state])

    return (
        <div>
            {state.map(item => {
                return <Todo key={item.id} item={item} />
            })}
        </div>
    )
}

export default TodoList;