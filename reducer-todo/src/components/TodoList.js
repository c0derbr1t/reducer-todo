import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {state.map(item => {
                return <Todo key={item.id} item={item} />
            })}
        </div>
    )
}

export default TodoList;