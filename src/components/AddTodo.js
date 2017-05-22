import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ input, onInputChange }) => {
  return (
    <div className="add-todo">
      <input
        type='text'
        value={input}
        onChange={onInputChange}
      />
    </div>
  );
};

AddTodo.propTypes = {
  input: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default AddTodo;
