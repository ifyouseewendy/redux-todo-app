import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, text, completed, onClick }) => {
  return (
    <li
      key={id}
      style={{
        textDecoration: completed ? 'line-throught' : 'none'
      }}
      onClick={onClick}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Todo;
