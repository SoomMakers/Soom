import React from 'react';

import { Link } from 'react-router-dom';

import CommunityContainer from './CommunityContainer';

export default function CommunityPage() {
  return (
    <div>
      <h1>Community</h1>
      <Link to="/community/post">POST</Link>
      <CommunityContainer />
    </div>
  );
}
