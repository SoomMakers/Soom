import React from 'react';

export default function List({ tasks, onClickDelete }) {
  if (tasks.length === 0) {
    return (
      <p>Nothing To Do!</p>
    );
  }

  return (
    <ol>
      {tasks.map(({ id, title }) => (
        <li key={id}>
          {title}
          <button type="button" onClick={() => onClickDelete(id)}>
            Complete
          </button>
        </li>
      ))}
    </ol>
  );
}
