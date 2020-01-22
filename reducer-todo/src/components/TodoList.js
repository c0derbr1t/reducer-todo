import React, { useState, useEffect, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = props => {

    console.log("outside", props.state);

    return (
        <div>
            {props.state.map(item => {
                return <Todo key={item.id} item={item} />
            })}
        </div>
    )
}

export default TodoList;