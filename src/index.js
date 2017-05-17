import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import { createStore } from "redux";
import todoApp from "./reducers";

let store = createStore(todoApp);

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from "./actions";

console.warn(store.getState());

let unsubscribe = store.subscribe(() => {
  console.warn(store.getState());
});

store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED));

unsubscribe();
