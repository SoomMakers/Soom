import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setTaskTitle,
  addTodo,
  deleteTodo,
  completeTodo,
} from '../../redux/actions';

import Input from './Input';
import List from './List';
import Day from './Day';

import { get } from '../../utils/utils';

export default function TodoContainer() {
  const dispatch = useDispatch();

  const taskTitle = useSelector(get('taskTitle'));
  const tasks = useSelector(get('tasks'));

  function handleChange({ target: { value } }) {
    dispatch(setTaskTitle(value));
  }

  function handleClick() {
    dispatch(addTodo());
  }

  function handleClickComplete(id) {
    dispatch(completeTodo(id));
  }

  function handleClickDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <Day />
      <Input
        value={taskTitle}
        onChange={handleChange}
        onClick={handleClick}
      />
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
        onClickComplete={handleClickComplete}
      />
    </div>
  );
}
