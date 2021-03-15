import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CommunityContainer from './CommunityContainer';

import continents from '../../fixtures/continents';

jest.mock('react-redux');

describe('CommunityContainer', () => {
  const dispatch = jest.fn();

  const renderCommunityContainer = () => render((
    <MemoryRouter>
      <CommunityContainer />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      posts: continents.asia.posts,
    }));
  });

  it('asia post를 그려준다.', () => {
    renderCommunityContainer();

    expect(screen.getByText(/kim/i)).toBeInTheDocument();
    expect(screen.getByText(/park/i)).toBeInTheDocument();
    expect(screen.getByText(/choi/i)).toBeInTheDocument();
  });
});
