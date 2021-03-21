import React from 'react';

import { Link } from 'react-router-dom';

import TodoContainer from './TodoContainer';

import '../../css/styles.css';

function TodoPage() {
  return (
    <div>
      <TodoContainer />
      <div id="goto-todo-find">
        <Link
          className="todo-main__list-search-container"
          to="/todo/find"
        >
          <input type="submit" value="" className="todo-main__list-search" />
          <span
            className="material-icons search-icon"
            role="img"
            aria-label="search"
          >
            search
          </span>
        </Link>
      </div>
    </div>
  );
}

export default TodoPage;
