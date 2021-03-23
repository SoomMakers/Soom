import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import { showDoneTasks, savePost } from '../../redux/actions';

import { get } from '../../utils/utils';

export default function PostContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const doneTasks = useSelector(get('doneTasks'));
  const user = useSelector(get('user'));

  const { handleSubmit, register } = useForm();

  function handleClickClose() {
    history.push('/community');
  }

  const onSubmit = (data) => {
    dispatch(
      savePost({
        user,
        post: data,
      }),
    );

    history.push('/community/post/picture');
  };

  useEffect(() => {
    dispatch(showDoneTasks());
  }, [dispatch]);

  if (!doneTasks) {
    return <p>No Complete Tasks</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="head__link-bar">
          <button type="button" onClick={handleClickClose} className="head__link">
            BACK
          </button>
          <button type="submit" className="head__link">
            NEXT
          </button>
        </div>
        <div className="list-container">
          <ul className="list community-todo__list">
            {doneTasks?.map(({ id, title }) => (
              <li key={id} className="list-todo community-todo__list-todo">
                <div className="list-checkset community-todo__list-checkset">
                  <input
                    type="checkbox"
                    id={`${id}-task`}
                    name="todo"
                    value={title}
                    ref={register()}
                    className="list-check community-todo__list-check"
                  />
                  <label htmlFor={`${id}-task`} className="list-name community-todo__list-name">{title}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
