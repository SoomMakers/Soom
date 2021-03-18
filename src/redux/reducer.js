import asia from '../fixtures/asia';

import { filterMissions } from '../utils/utils';

export const initialState = {
  id: 100,
  user: {
    id: 1818,
    name: 'SangHoon',
    continent: 'asia',
  },
  missions: [],
  taskTitle: '',
  tasks: [],
  done: false,
  continent: 'asia',
  temporaryPost: {},
  posts: asia.posts,
  donetasks: [],
};

const reducers = {
  setTaskTitle: (state, { payload: { taskTitle } }) => ({
    ...state,
    taskTitle,
  }),

  setMissions: (state, { payload: { missions } }) => ({
    ...state,
    missions: filterMissions(missions),
  }),

  setPosts: (state, { payload: { posts } }) => ({
    ...state,
    posts,
  }),

  setContinent: (state, { payload: { continent } }) => ({
    ...state,
    continent,
  }),

  savePost: (state, { payload: { temporaryPost } }) => {
    temporaryPost.post.post.todo = temporaryPost.post.post.todo.map((taskTitle, index) => ({
      id: state.id + index,
      taskTitle,
    }));

    return ({
      ...state,
      temporaryPost,
    });
  },

  addTodo: (state) => {
    if (state.taskTitle) {
      return {
        ...state,
        id: state.id + 1,
        taskTitle: '',
        tasks: [
          ...state.tasks,
          { id: state.id, title: state.taskTitle, done: false },
        ],
      };
    }

    return state;
  },

  deleteTodo: (state, { payload: { id } }) => ({
    ...state,
    tasks: [...state.tasks].filter((element) => id !== element.id),
  }),

  completeTodo: (state, { payload: { id } }) => ({
    ...state,
    tasks: [
      ...state.tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }

        return task;
      }),
    ],
  }),

  addMission: (
    state,
    {
      payload: {
        mission: { tasks },
      },
    },
  ) => {
    const newTasks = tasks.map((title, index) => ({
      id: state.id + index,
      title,
      done: false,
    }));

    return {
      ...state,

      id: state.id + 1,
      tasks: [...state.tasks, ...newTasks],
    };
  },

  showDoneTasks: (state) => ({
    ...state,
    doneTasks: state.tasks.filter((task) => task.done === true),
  }),

  addPost: (state, { payload: { description } }) => ({
    ...state,
    posts: [...state.posts, {
      ...state.temporaryPost,
      description: description.description,
    }],
  }),
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
