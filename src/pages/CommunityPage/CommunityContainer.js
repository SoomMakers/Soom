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
      <header>
        <select name="regions" id="region-select" onChange={handleChange} className="regions">
          <option value="asia">asia</option>
          <option value="africa">africa</option>
          <option value="europe">europe</option>
          <option value="america">america</option>
          <option value="oceania">oceania</option>
        </select>
      </header>
      <main className="community-feed-container">

        {posts?.map(({
          user: { id, name }, post: { todo }, description, src,
        }) => (
          <section key={id}>
            <div className="community-feed">
              <div className="community-feed__profile">
                <img
                  src="https://avatars.githubusercontent.com/u/54464320?s=460&u=069fe7a8dfcf4420fae0261f02917c5ac4ae7827&v=4"
                  alt=""
                  className="community-feed__profile-photo"
                />
                <div className="community-feed__profile-user">
                  <p className="community-feed__user">{name}</p>
                  <p className="community-feed__day">DAY 11</p>
                </div>
              </div>
              <ul className="community-feed__list">
                {todo.map(({ id: todoId, taskTitle }) => (
                  <div key={todoId} className="community-feed__today">
                    <li className="community-feed__todo">{taskTitle}</li>
                  </div>
                ))}
              </ul>
              <div className="community-feed__photo-container">
                <img
                  src={src}
                  alt=""
                />
              </div>
              <p className="community-feed__description">{description}</p>
            </div>
          </section>
        ))}

      </main>
    </div>
  );
}
