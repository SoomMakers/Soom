import {
  fetchPost,
  fetchMission,
} from '../services/api';

export function setTaskTitle(taskTitle) {
  return {
    type: 'setTaskTitle',
    payload: { taskTitle },
  };
}

export function setPosts(posts) {
  return {
    type: 'setPosts',
    payload: { posts },
  };
}

export function setMissions(missions) {
  return {
    type: 'setMissions',
    payload: { missions },
  };
}

export function setContinent(continent) {
  return {
    type: 'setContinent',
    payload: { continent },
  };
}

export function addTodo() {
  return { type: 'addTodo' };
}

export function deleteTodo(id) {
  return {
    type: 'deleteTodo',
    payload: { id },
  };
}

export function completeTodo(id) {
  return {
    type: 'completeTodo',
    payload: { id },
  };
}

export function addMission(mission) {
  return {
    type: 'addMission',
    payload: { mission },
  };
}

export function showDoneTasks() {
  return { type: 'showDoneTasks' };
}

export function addPost(description) {
  return {
    type: 'addPost',
    payload: { description },
  };
}

export function savePost(temporaryPost) {
  return {
    type: 'savePost',
    payload: { temporaryPost },
  };
}

export function loadPosts(continent) {
  return async (dispatch) => {
    dispatch(setContinent(continent));

    const posts = await fetchPost({ continent });

    dispatch(setPosts(posts));
  };
}

export function loadMissions() {
  return async (dispatch) => {
    const missions = await fetchMission();
    dispatch(setMissions(missions));
  };
}
