import { fetchPost } from '../services/api'

export function setTaskTitle(taskTitle) {
  return (
    {
      type: 'setTaskTitle',
      payload: { taskTitle }
    }
  );
}

export function setPosts(posts){
  return (
    {
      type:'setPosts',
      payload:{ posts },
    }
  );
}

export function setContinent(continent){
  return (
    {
      type:'setContinent',
      payload:{ continent },
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

export function loadPosts( continent ){
  return async (dispatch) => {
    dispatch(setContinent(continent))
    
    const posts = await fetchPost({ continent });

    dispatch(setPosts(posts));
  }
}