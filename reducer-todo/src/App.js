import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { initialState, todoReducer } from './reducers/todoReducer'; 

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("App State", state);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Route path='/'>
        <TodoList state={state} dispatch={dispatch}/>  
      </Route>
      <Route path='/TodoForm'>
        <TodoForm state={state} dispatch={dispatch}/>
      </Route>
    </div>
  );
}

export default App;
