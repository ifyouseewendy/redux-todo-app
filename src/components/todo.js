import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completed, onClick }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    <span
      role="link"
      onClick={onClick}
      tabIndex="0"
    >
      {text}
    </span>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
