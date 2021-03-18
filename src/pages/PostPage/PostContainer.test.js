import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import given from 'given2';

import PostContainer from './PostContainer';

jest.mock('react-redux');

describe('PostContainer', () => {
  const dispatch = jest.fn();

  const doneTasks = [
    { id: 100, title: 'segregation', done: true },
    { id: 101, title: 'use Tumblr', done: true },
  ];

  const renderPost = () => render((
    <MemoryRouter>
      <PostContainer />
    </MemoryRouter>
  ));

  given('doneTasks', () => doneTasks);

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      doneTasks: given.doneTasks,
    }));
  });

  it('완료된 일들을 보여준다.', () => {
    renderPost();

    expect(screen.getByLabelText('segregation')).toBeInTheDocument();
    expect(screen.getByLabelText('use Tumblr')).toBeInTheDocument();
  });

  it('완료된 일이 없으면, 유저에게 완료 된 일이 없다는 메세지를 보여준다', () => {
    given('doneTasks', () => null);

    renderPost();

    expect(screen.getByText('No Complete Tasks')).toBeInTheDocument();
  });

  it('NEXT 버튼을 누르면, dispatch가 호출된다.', async () => {
    given('doneTasks', () => doneTasks);

    renderPost();

    fireEvent.click(screen.getByLabelText('segregation'));
    fireEvent.click(screen.getByLabelText('use Tumblr'));

    await act(async () => {
      fireEvent.submit(
        screen.getByRole('button', {
          name: 'NEXT',
        }),
      );
    });

    expect(dispatch).toBeCalledTimes(2);
  });
});
