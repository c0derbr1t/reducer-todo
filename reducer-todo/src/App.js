import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Route path='/'>
        <TodoList />  
      </Route>
      <Route path='/TodoForm'>
        <TodoForm />
      </Route>
    </div>
  );
}

export default App;
