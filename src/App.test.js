import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('render', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(queryByText('App')).toBeInTheDocument();
  });
})