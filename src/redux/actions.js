export function setTaskTitle(taskTitle) {
  return (
    {
      type: 'setTaskTitle',
      payload: { taskTitle }
    }
  );
}

export function addTodo() {
  return ({ type: 'addTodo' });
}

export function deleteTodo(id) {
  return ({
    type: 'deleteTodo',
    payload: { id }
  });
}

export function completeTodo(id) {
  return ({
    type: 'completeTodo',
    payload: { id }
  });
}

export function addMission(mission) {
  return ({
    type: 'addMission',
    payload: { mission }
  })
}