import React from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

import { sendPicture } from '../../redux/actions';

export default function PostPictureContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('imageFile', data.imageFile[0]);

    dispatch(sendPicture(formData));

    history.push('/community/post/description');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="post-picture">
          Upload
        </label>
        <input
          type="file"
          id="post-picture"
          name="imageFile"
          accept="image/*"
          required
          ref={register()}
        />

        <button type="submit">
          NEXT
        </button>
      </form>
    </div>
  );
}
