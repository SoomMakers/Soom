export const initialState = {
  id: 100,
  user: {
    id: 1818,
    name: 'SangHoon',
    continent: 'asia',
  },
  taskTitle: '',
  tasks: [],
  done: false,
  continent: 'asia',
  posts: [],
  donetasks: []
};

const reducers = {
  setTaskTitle: (state, { payload: { taskTitle } }) => {
    return {
      ...state,
      taskTitle,
    };
  },

  setPosts: (state, { payload: { posts } }) => {
    return {
      ...state,
      posts,
    };
  },

  setContinent: (state, { payload: { continent } }) => {
    return {
      ...state,
      continent,
    };
  },

  addTodo: (state) => {
    if (state.taskTitle) {
      return ({
        ...state,
        id: state.id + 1,
        taskTitle: '',
        tasks: [...state.tasks, { id: state.id, title: state.taskTitle, done: false }],
      })
    }

    return state;
  },

  deleteTodo: (state, { payload: { id } }) => {
    return ({
      ...state,
      tasks: [...state.tasks].filter((element) => id !== element.id)
    })
  },

  completeTodo: (state, { payload: { id } }) => {
    return ({
      ...state,
      tasks: [...state.tasks.map((task) => {
        if (task.id === id)
          task.done = !task.done;

        return task
      })]
    })
  },

  addMission: (state, { payload: { mission: { tasks } } }) => {
    const newTasks = tasks.map((title, index) => ({
      id: state.id + index,
      title,
      done: false,
    }))

    return ({
      ...state,
      id: state.id + 1,
      tasks: [...state.tasks, ...newTasks]
    })
  },

  showDoneTasks: (state) => {
    return ({
      ...state,
      doneTasks: state.tasks.filter((task) => task.done === true),
    })
  },

  addPost: (state, { payload: { post } }) => {
    return ({
      ...state,
      posts: [...state.posts, post]
    })
  }
}

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
