import React from 'react';

import { Link } from 'react-router-dom';

import CommunityContainer from './CommunityContainer';

export default function CommunityPage() {
  return (
    <div>
      <header className="head__link-bar">
        <p />
        <Link to="/community/post" className="head__link head__link-community">POST</Link>
      </header>
      <CommunityContainer />
    </div>
  );
}
