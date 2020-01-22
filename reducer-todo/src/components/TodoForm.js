import React, { useState } from 'react';



const TodoForm = props => {
        const [newItem, setNewItem] = useState('');
        const [value, setValue] = useState('');

    const handleChanges = e => {
        setNewItem({
            item: e.target.value,
            completed: true,
            id: Date.now()
        }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_ITEM", payload: newItem });
    }

    console.log("newItem in TodoForm.js", newItem);
    console.log("State after newItem in TodoForm.js", props.state);
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