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

  /**
   * 1. next 버튼으로 교체해서 Description Page로 이동하여라 App 라우팅설정
   * 2. next를 클릭 시에, 현재 form data를 store에 우선 저장을 실시한다.
   * 3. reducer에서 setPost -> 수정을 해야된다 선 데이터 저장.
   *
   *
   */

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

    history.push('/community/post/description');
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
