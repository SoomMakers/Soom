import React from 'react';

import { render, screen } from '@testing-library/react';

import ToDoFind from './TodoFind';

describe('TodoFind', () => {
  const handleClickClose = jest.fn();
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();
  const register = jest.fn();

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
      title: 'turn off water after washing your hands',
    },
    {
      id: 104,
      title: 'replace plastic bags with resuable bags',
    },
  ];

  it('미션을 그려준다', () => {
    render((
      <ToDoFind
        handleClickClose={handleClickClose}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        missions={missions}
      />
    ));

    expect(screen.getByLabelText('turn off lights when you leave a room')).toBeInTheDocument();
    expect(screen.getByLabelText("unplug devices when you don't use them")).toBeInTheDocument();
    expect(screen.getByLabelText('turn off water after brushing your teeth')).toBeInTheDocument();
    expect(screen.getByLabelText('turn off water after washing your hands')).toBeInTheDocument();
    expect(screen.getByLabelText('replace plastic bags with resuable bags')).toBeInTheDocument();
  });
});
