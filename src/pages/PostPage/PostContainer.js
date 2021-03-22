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
      <button type="button" onClick={handleClickClose}>
        BACK
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {doneTasks?.map(({ id, title }) => (
          <div key={id}>
            <input
              type="checkbox"
              id={`${id}-task`}
              name="todo"
              value={title}
              ref={register()}
            />

            <label htmlFor={`${id}-task`}>{title}</label>
          </div>
        ))}

        <button type="submit">
          NEXT
        </button>
      </form>
    </div>
  );
}
