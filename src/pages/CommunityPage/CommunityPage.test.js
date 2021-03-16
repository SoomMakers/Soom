import React from 'react';

import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import CommunityPage from './CommunityPage';

jest.mock('react-redux');

describe('CommunityPage', () => {
  const dispatch = jest.fn();

  const renderCommunityPage = () => render((
    <MemoryRouter>
      <CommunityPage />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      continent: 'asia',
      posts: [
        {
          user: {
            id: 100,
            name: 'kim',
          },
          post: {
            todo: [
              {
                id: 1000,
                taskTitle: 'Segregation',
              },
              {
                id: 1001,
                taskTitle: 'Recycle Plastics',
              },
            ],
          },
        },
      ],
    }));
  });

  it('CommunityPage를 그려준다', () => {
    renderCommunityPage();

    expect(screen.getByText('Community')).toBeInTheDocument();

    expect(screen.getByText(/POST/i)).toBeInTheDocument();
    expect(screen.getByText(/asia/i)).toBeInTheDocument();
  });
});
