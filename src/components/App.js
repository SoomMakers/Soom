import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import '../css/styles.css';

import {
  TodoPage,
  TodoFindPage,
  CommunityPage,
  PostPage,
  PostDescriptionPage,
  PostPicturePage,
  UserPage,
} from '../pages';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/todo/find" component={TodoFindPage} />
        <Route exact path="/community" component={CommunityPage} />
        <Route exact path="/community/post" component={PostPage} />
        <Route exact path="/community/post/description" component={PostDescriptionPage} />
        <Route exact path="/community/post/picture" component={PostPicturePage} />
        <Route exact path="/user" component={UserPage} />
      </Switch>
      <footer className="nav">
        <ul className="nav__list">
          <li className="nav__btn">
            <Link to="/" className="nav__link nav__now">
              <span className="material-icons">list</span>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to="/community" className="nav__link">
              <span className="material-icons">subtitles</span>
            </Link>
          </li>
          <li className="nav__btn">
            <Link to="/user" className="nav__link">
              <span className="material-icons">account_circle</span>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
