import React from 'react';

import CommunityPage from './ComunityPage';

import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/community" component={CommunityPage} />
      </Switch>
    </>
  );
}

