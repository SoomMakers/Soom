import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import TodoPage from './TodoPage';

jest.mock('react-redux');

describe('TodoPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '밥먹기',
      tasks: [
        { id: 1, title: 'Task-1', done: false },
        { id: 2, title: 'Task-2', done: true },
      ],
    }))
  });

  it('render', () => {
    const { queryByPlaceholderText } = render(
      <MemoryRouter>
        <TodoPage />
      </MemoryRouter>
    );

    expect(queryByPlaceholderText('please write your task')).toBeInTheDocument();
  })
});

