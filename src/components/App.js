import React from 'react';

import {
  Switch, Route, Link, useLocation,
} from 'react-router-dom';

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
  const location = useLocation();
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
            <Link to="/" className="nav__link">
              {(location.pathname === '/') || (location.pathname === '/todo/find') || (location.pathname === '/todo')
                ? <span className="material-icons nav__now">list</span>
                : <span className="material-icons">list</span>}
            </Link>
          </li>
          <li className="nav__btn">
            <Link to="/community" className="nav__link">
              {location.pathname === '/community'
                ? <span className="material-icons nav__now">subtitles</span>
                : <span className="material-icons">subtitles</span>}
            </Link>
          </li>
          <li className="nav__btn">
            <Link to="/user" className="nav__link">
              {location.pathname === '/user'
                ? <span className="material-icons nav__now">account_circle</span>
                : <span className="material-icons">account_circle</span>}
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
