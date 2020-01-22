import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newItem, setNewItem] = useState('');

    const handleChanges = e => {
        setNewItem({
            item: e.target.value,
            completed: false,
            id: Date.now()
        }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: newItem })
    }

    console.log("newItem in TodoForm.js", newItem);
    console.log("State after newItem in TodoForm.js", state);
    return (
        <div>
            <h2>Add a new Task!</h2>
            <form>
                <input 
                className='item-input'
                type='text' 
                name='newItem'
                onChange={handleChanges} />
                <button onClick={handleSubmit}>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TodoForm;