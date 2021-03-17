import React from 'react';

import {
  act, fireEvent, render, screen,
} from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TodoFindContainer from './TodoFindContainer';

jest.mock('react-redux');

const mockPush = jest.fn(); // path

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('TodoFindContainer', () => {
  const dispatch = jest.fn();

  const missions = [
    {
      id: 100,
      title: 'turn off lights when you leave a room',
    },
    {
      id: 101,
      title: "unplug devices when you don't use them",
    },
    {
      id: 102,
      title: 'turn off water after brushing your teeth',
    },
    {
      id: 103,
      title: 'turn off water after brushing your teeth',
    },
    {
      id: 104,
      title: 'turn off water after washing your hands',
    },
  ];

  function renderTodoFindContainer() {
    return render((
      <MemoryRouter>
        <TodoFindContainer />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      missions,
    }));
  });

  it('미션을 선택하고 제출 할 떄, dispatch를 호출한다.', async () => {
    renderTodoFindContainer();

    fireEvent.click(screen.getByLabelText('turn off lights when you leave a room'));
    fireEvent.click(screen.getByLabelText("unplug devices when you don't use them"));

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', {
        name: /ADD/i,
      }));
    });

    expect(dispatch).toBeCalled();
  });

  // describe('페이지 처음 진입 시', () => {
  //   it('dispatch가 실행된다.', () => {
  //     renderTodoFindContainer();
  //     expect(dispatch).toBeCalledTimes(1);
  //   });
  // });
});
