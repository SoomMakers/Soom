import React from 'react';
import { useDispatch } from 'react-redux';

import {
  act, render, screen, fireEvent,
} from '@testing-library/react';

import PostDescriptionContainer from './PostDescriptionContainer';

jest.mock('react-redux');

describe('PostDescriptionContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('descriptoin form을 그려준다.', () => {
    render(<PostDescriptionContainer />);

    expect(screen.getByLabelText('description')).toBeInTheDocument();
  });

  it('POST 버튼을 누르면, dispatch가 호출된다.', async () => {
    render(<PostDescriptionContainer />);

    fireEvent.input(screen.getByLabelText('description'), {
      target: {
        value: 'I SAVED MYSELF AGAIN',
      },
    });

    await act(async () => {
      fireEvent.submit(
        screen.getByRole('button', {
          name: 'POST',
        }),
      );
    });

    expect(dispatch).toBeCalled();
  });
});
