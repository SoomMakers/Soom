import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import TodoContainer from './TodoContainer';

jest.mock('react-redux');

describe('TodoContainer', () => {

  const dispatch = jest.fn();

  const renderTodoContainer = () => render(<TodoContainer />)

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '밥먹기',
      tasks: [
        { id: 1, title: 'Task-1', done: false },
      ],
    }))
  })

  it('render TodoContainer', () => {
    const { queryByText } = renderTodoContainer();

    expect(queryByText('Task-1')).toBeInTheDocument();
  })

  it('addTodo dispatch 해준다', () => {
    const { queryByText } = renderTodoContainer();

    fireEvent.click(queryByText('Add'));

    expect(dispatch).toBeCalled();
  })

  it('handleClickComplete를 dispatch 해준다', () => {
    const { queryByText } = renderTodoContainer();

    fireEvent.click(queryByText('Complete'));

    expect(dispatch).toBeCalled();
  })

  it('handleClickDelete를 dispatch 해준다', () => {
    const { queryByText } = renderTodoContainer();

    fireEvent.click(queryByText('Delete'));

    expect(dispatch).toBeCalled();
  })




});

