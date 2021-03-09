import { addTodo, deleteTodo, setTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  it('setTasktitle', () => {
    const initialState = { taskTitle: '' };

    const state = reducer(initialState, setTaskTitle('밥먹기'));

    expect(state.taskTitle).toBe('밥먹기');
  });

  it('addTodo', () => {
    const initialState = {
      id: 100,
      taskTitle: '밥먹기',
      tasks: [],
    };

    const state = reducer(initialState, addTodo());

    expect(state.tasks).toHaveLength(1);
  });

  it('deleteTodo', () => {
    const initialState = {
      tasks: [
        { id: 100, taskTitle: '밥먹기', status: false },
        { id: 101, taskTitle: '눕기', status: true },
      ],
    };

    const state = reducer(initialState, deleteTodo(101));

    expect(state.tasks).toHaveLength(1);
  });
});