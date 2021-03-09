export const initialState = {
  id: 100,
  taskTitle: '',
  tasks: [],
  done: false,
};

const reducers = {
  setTaskTitle: (state, { payload: { taskTitle } }) => {
    return {
      ...state,
      taskTitle,
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

  }
}

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
