import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, filter }) => {
  let filteredTodos;

  switch(filter) {
    case "Active":
      filteredTodos = todos.filter(todo => !todo.completed);
      break;
    case "Completed":
      filteredTodos = todos.filter(todo => todo.completed);
      break;
    default:
      filteredTodos = todos;
  }

  return (
    <div className="todo-list">
      <ul>
        {filteredTodos.map((todo, id) =>
          <Todo
            key={id}
            {...todo}
            onClick={() => onTodoClick(id)}
          />
        )}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  filter: PropTypes.string
};

export default TodoList;
