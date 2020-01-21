import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/'>🏠</Link>
            </div>
            <h1>
                What do I need to do?
            </h1>
            <Link to='/TodoList'>List</Link>
            <br></br>
            <Link to='/TodoForm'>Add</Link>
        </div>
    )
}

export default Navigation;