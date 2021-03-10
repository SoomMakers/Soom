import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context'

import List from './List';

describe('List', () => {
  const handleClickDelete = jest.fn();
  const handleClickComplete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
        onClickComplete={handleClickComplete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1', done: false },
      { id: 2, title: 'Task-2', done: true },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders “Delete” button to delete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('Delete');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });


  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];

      const { getByText } = renderList(tasks);

      expect(getByText('Nothing To Do!')).not.toBeNull();
    });
  });
});