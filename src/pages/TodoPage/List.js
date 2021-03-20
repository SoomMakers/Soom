import React from 'react';

import '../../css/styles.css';

export default function List({ tasks, onClickDelete, onClickComplete }) {
  if (tasks.length === 0) {
    return <p>Nothing To Do!</p>;
  }

  return (
    <ul className="list todo-main__list">
      {tasks.map(({ id, title }) => (
        <li key={id} className="list-todo todo-main__list-todo">
          <div className="list-checkset todo-main__list-checkset">
            <input
              className="list-check todo-main__list-check"
              type="checkbox"
              onClick={() => onClickComplete(id)}
              placeholder="complete"
            />
            <p className="list-name todo-main__list-name">{title}</p>
          </div>
          <div className="list-delete-container">
            <button
              className="list-delete todo-main__list-delete"
              type="button"
              onClick={() => onClickDelete(id)}
            >
              <span className="material-icons delete-icon">clear</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
