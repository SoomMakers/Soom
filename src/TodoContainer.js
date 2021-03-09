import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setTaskTitle, addTodo, deleteTodo } from './actions';

import Input from './Input';
import List from './List';
import Day from './Day';

export default function TodoContainer() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChange(e) {
    dispatch(setTaskTitle(e.target.value));
  }

  function handleClick() {
    dispatch(addTodo());
  }

  function handleClickDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <Day />
      <Input value={taskTitle} onChange={handleChange} onClick={handleClick} />
      <List tasks={tasks} onClickDelete={handleClickDelete} />
    </div>
  );
}
