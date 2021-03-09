import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import TodoContainer from './TodoContainer';

jest.mock('react-redux');

describe('TodoContainer', () => {

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '밥먹기',
      tasks: [
        { id: 1, title: 'Task-1', status: false },
        { id: 2, title: 'Task-2', status: true },
      ],
    }))
  })

  it('render', () => {
    const { queryByText } = render(<TodoContainer />);
    expect(queryByText('Task-1')).toBeInTheDocument();
  })
});

