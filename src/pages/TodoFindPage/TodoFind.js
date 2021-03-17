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
      <h1>Find</h1>
      <h2>Choose What You Want To Do</h2>
      <button type="button" onClick={handleClickClose}>
        ClOSE
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {missions?.map(({ id, title }) => (
          <div key={id}>
            <label htmlFor={`${id}-mission`}>
              {title}
            </label>
            <input
              type="checkbox"
              id={`${id}-mission`}
              name="tasks"
              value={title}
              ref={register}
            />
          </div>
        ))}

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
