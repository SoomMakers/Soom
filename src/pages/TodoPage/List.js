import React from 'react';

export default function List({ tasks, onClickDelete, onClickComplete }) {
  if (tasks.length === 0) {
    return <p>Nothing To Do!</p>;
  }

  return (
    <ol>
      {tasks.map(({ id, title }) => (
        <li key={id}>
          <button type="button" onClick={() => onClickComplete(id)}>
            Complete
          </button>
          {title}
          <button type="button" onClick={() => onClickDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
