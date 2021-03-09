import React from 'react';

import CommunityPage from './CommunityPage';

import { Switch, Route } from 'react-router-dom';

import TodoPage from './TodoPage';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/community" component={CommunityPage} />
      </Switch>
    </>
  );
}

