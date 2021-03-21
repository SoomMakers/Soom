import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      id: 100,
      taskTitle: '',
      tasks: [
        { id: 1, title: 'Task-1', status: false },
        { id: 2, title: 'Task-2', status: true },
      ],
    }));
  });

  it('renders App', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(queryByText('list')).toBeInTheDocument();
    expect(queryByText('subtitles')).toBeInTheDocument();
  });
});
