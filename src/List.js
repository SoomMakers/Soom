import React from 'react';

export default function List({ tasks, onClickDelete }) {
  if (tasks.length === 0) {
    return (
      <p>할 일이 없어요!</p>
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
