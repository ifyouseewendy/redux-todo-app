import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
