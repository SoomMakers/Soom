import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

import { sendPicture } from '../../redux/actions';

export default function PostPictureContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const addPhoto = useRef(null);
  const photoInput = useRef(null);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('imageFile', data.imageFile[0]);

    dispatch(sendPicture(formData));

    history.push('/community/post/description');
  };

  function handleClickClose() {
    history.push('/community/post');
  }

  function onChange() {
    const file = photoInput.current.firstChild.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        addPhoto.current.style.backgroundImage = `url(${reader.result})`;
      };
    }
  }

  function onClickImage() {
    photoInput.current.firstChild.click();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="head__link-bar">
          <button type="button" onClick={handleClickClose} className="head__link">
            BACK
          </button>
          <button type="submit">
            NEXT
          </button>
        </div>
        <div
          className="community-picture"
          ref={addPhoto}
          onClick={onClickImage}
        />
        <label className="community-picture__text" htmlFor="post-picture">
          Click to upload!
        </label>
        <div className="community-picture__upload" ref={photoInput}>
          <input
            type="file"
            id="post-picture"
            name="imageFile"
            accept="image/*"
            onChange={onChange}
            required
            ref={register()}
          />
        </div>
      </form>
    </div>
  );
}
