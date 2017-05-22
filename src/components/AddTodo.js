import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ value = '', onChange = () => {} }) => {
  return (
    <div className="add-todo">
      <form>
        <input
          type='text'
          placeholder='add todo'
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddTodo;
