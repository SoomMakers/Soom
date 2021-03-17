import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TodoFindPage from './TodoFindPage';

jest.mock('react-redux');

const mockPush = jest.fn(); // path

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('TodoFindPage', () => {
  const dispatch = jest.fn();

  function renderTodoFindPage() {
    return render((
      <MemoryRouter>
        <TodoFindPage />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders TodoFindPage', () => {
    renderTodoFindPage();

    expect(screen.getByText('Find')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CLOSE/i })).toBeInTheDocument();
    expect(screen.getByText(/Choose What You Want To Do/i)).toBeInTheDocument();
  });
});
