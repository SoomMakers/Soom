import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from '../../redux/actions';

import { get } from '../../utils/utils';

export default function CommunityContainer() {
  const dispatch = useDispatch();

  const posts = useSelector(get('posts'));

  function handleChange({ target: { value } }) {
    dispatch(loadPosts(value));
  }

  return (
    <div>
      <select name="regions" id="region-select" onChange={handleChange}>
        <option value="asia">asia</option>
        <option value="africa">africa</option>
        <option value="europe">europe</option>
        <option value="america">america</option>
        <option value="oceania">oceania</option>
      </select>
      <div>
        {posts?.map(({ user: { id, name }, post: { todo } }) => (
          <section key={id}>
            <p>{name}</p>
            <ul>
              {todo.map(({ id: todoId, taskTitle }) => (
                <li key={todoId}>{taskTitle}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
