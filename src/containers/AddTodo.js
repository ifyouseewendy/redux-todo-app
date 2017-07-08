import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

const UnconnectedAddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="add-todo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => (input = node) && input.focus()}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

UnconnectedAddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = connect()(UnconnectedAddTodo);

export default AddTodo;
