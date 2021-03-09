export const initialState = {
  id: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  // setRegions(state, { payload: { regions } }) {
  //   return {
  //     ...state,
  //     regions,
  //   };
  // },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
