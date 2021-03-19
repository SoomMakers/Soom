import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import {
  TodoPage,
  TodoFindPage,
  CommunityPage,
  PostPage,
  PostDescriptionPage,
  UserPage,
} from '../pages';

export default function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Todo</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/user">My Page</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/todo/find" component={TodoFindPage} />
        <Route exact path="/community" component={CommunityPage} />
        <Route exact path="/community/post" component={PostPage} />
        <Route exact path="/community/post/description" component={PostDescriptionPage} />
        <Route exact path="/user" component={UserPage} />
      </Switch>
    </>
  );
}
