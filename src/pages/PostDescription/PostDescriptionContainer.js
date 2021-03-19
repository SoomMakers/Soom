import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { addPost } from '../../redux/actions';

export default function PostDescription() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, register } = useForm();

  function handleClickBack() {
    history.push('/community/post');
  }

  const onSubmit = (data) => {
    dispatch(addPost(data));

    history.push('/community');
  };

  return (
    <div>
      <button type="button" onClick={handleClickBack}>
        BACK
      </button>

      <h2>Write What You Want to Post</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="post-description">
          description
        </label>
        <textarea
          placeholder="Write a brief description"
          id="post-description"
          name="description"
          cols="30"
          rows="10"
          ref={register()}
        />

        <button type="submit">
          POST
        </button>
      </form>
    </div>
  );
}
