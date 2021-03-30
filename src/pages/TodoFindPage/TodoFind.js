import React from 'react';

export default function TodoFind({
  handleClickClose,
  handleSubmit,
  onSubmit,
  register,
  missions,
}) {
  return (
    <div>
      <header className="head__link-bar">
        <p />
        <button type="button" onClick={handleClickClose} className="head__link head__link-close">
          <p>CLOSE</p>
        </button>
      </header>
      <h2 className="todo-find__title title">Choose What You Want To Do</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list">
          {missions?.map(({ id, title }) => (
            <li key={id} className="list-todo todo-find__list-todo">
              <div className="list-checkset todo-find__list-checkset">
                <input
                  type="checkbox"
                  id={`${id}-mission`}
                  className="todo-find__list-check"
                  name="tasks"
                  value={title}
                  ref={register}
                />
                <label htmlFor={`${id}-mission`} className="list-name">
                  {title}
                </label>

              </div>
            </li>
          ))}
        </ul>
        <div id="add-todo-find">
          <div className="todo-find__list-add-container">
            <button
              type="submit"
              className="todo-find__list-add"
            >
              <span className="material-icons add-icon">add</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
