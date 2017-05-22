import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos = [], onTodoClick = () => {} }) => {
  return (
    <div className="todo-list">
      <ul>
        {
          todos.map((todo) => (
            <Todo
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onClick={onTodoClick}
            />
          ))
        }
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

export default TodoList;
