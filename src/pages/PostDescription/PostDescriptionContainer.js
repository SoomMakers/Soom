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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="head__link-bar">
          <button className="head__link" type="button" onClick={handleClickBack}>
            BACK
          </button>
          <button className="head__link" type="submit">
            POST
          </button>
        </div>
        <h2 className="community-description__title title">Write What You Want to Post</h2>
        <div className="community-description__container">
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
        </div>
      </form>
    </div>
  );
}
