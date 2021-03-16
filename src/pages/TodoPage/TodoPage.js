import React from 'react';

import { Link } from 'react-router-dom';
import TodoContainer from './TodoContainer';

function TodoPage() {
  return (
    <div>
      <TodoContainer />
      <Link to="/todo/find">
        <span role="img" aria-label="search">
          🔍
        </span>
      </Link>
    </div>
  );
}

export default TodoPage;
