import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todos: [],
      filter: "All",
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onKeyPress(e) {
    if (e.charCode === 13) {
      const todo = {
        text: this.state.input.trim(),
        completed: this.state.filter === "Completed",
      };
      this.setState({
        input: "",
        todos: [...this.state.todos, todo],
      });
    }
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  onTodoClick(id) {
    const todos = this.state.todos;
    todos[id].completed = !todos[id].completed;

    this.setState({ todos });
  }

  onFilterClick(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <div className="App-body">
          <AddTodo
            input={this.state.input}
            onKeyPress={this.onKeyPress}
            onInputChange={this.onInputChange}
          />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
