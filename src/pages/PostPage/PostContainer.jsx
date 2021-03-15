import React from 'react';
import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import { showDoneTasks, addPost } from '../../redux/actions';

import { get } from '../../utils/utils';

export default function PostContainer() {
  const doneTasks = useSelector(get('doneTasks'));
  const user = useSelector(get('user'));
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, register } = useForm();

  function handleClickClose() {
    history.push('/community');
  }

  const onSubmit = data => {
    //Dispatch : 폼 제출 시, 커뮤니티 아시아 포스트에 새로운 포스트 추가를 원한다.
    // 사용자의 지역이 필요하고, 포스트 객체에는 사용자의 아이디와 이름이 필요하고, todo 라는 key : 배열의 객체
    dispatch(addPost({
      post: {
        user,
        post: data
      }
    }))

    history.push('/community');
  }

  useEffect(() => {
    dispatch(showDoneTasks());
  }, []);

  if (!doneTasks) {
    return (
      <p>No Complete Tasks</p>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClickClose}
      >
        BACK
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {doneTasks?.map(({ id, title }) => (
          <div key={id}>
            <input
              type="checkbox"
              id={`${id}-task`}
              name='todo'
              value={title}
              ref={register()}
            />

            <label htmlFor={`${id}-task`}>
              {title}
            </label>
          </div>
        ))}

        <input type="submit" value='Add' />

      </form>
    </div>
  )



}