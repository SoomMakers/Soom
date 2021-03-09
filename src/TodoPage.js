import React from 'react'

import TodoContainer from './TodoContainer';

import { Link } from 'react-router-dom';

function TodoPage() {
  return (
    <div>
      <TodoContainer />
      <Link to="/todo/find">🔍</Link>
    </div>
  );
}

export default TodoPage
