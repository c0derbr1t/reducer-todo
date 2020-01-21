import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>
                What do I need to do?
            </h1>
            <Link to='/'>Todo's</Link>
            <Link to='/TodoForm'>Add a Todo</Link>
        </div>
    )
}

export default Navigation;