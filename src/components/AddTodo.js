import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ input, onKeyPress, onInputChange }) => {
  return (
    <div className="add-todo">
      <input
        type='text'
        value={input}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        autoFocus={true}
      />
    </div>
  );
};

AddTodo.propTypes = {
  input: PropTypes.string,
  onKeyPress: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default AddTodo;
