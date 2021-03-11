import {
  addTodo,
  deleteTodo,
  completeTodo,
  setTaskTitle,
  setPosts,
  setContinent,
  addMission,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  it('setTasktitle', () => {
    const initialState = { taskTitle: '' };

    const state = reducer(initialState, setTaskTitle('밥먹기'));

    expect(state.taskTitle).toBe('밥먹기');
  });

  it('setPosts', () => {
    const initialState = { posts: [] };

    const newPosts = [
      {
        user: {
          id: 100,
          name: 'kim',
        },
        post: {
          todo: [
            {
              id: 1000,
              taskTitle: 'Segregation',
            },
            {
              id: 1001,
              taskTitle: 'Recycle Plastics',
            },
          ],
        },
      },
    ]

    const state = reducer(initialState, setPosts(newPosts));
    expect(state.posts).toHaveLength(1);
    expect(state.posts[0].post.todo).toHaveLength(2);
  });


  it('setContinent', () => {
    const initialState = { continent: 'asia' };

    const state = reducer(initialState, setContinent('europe'));

    expect(state.continent).toBe('europe');
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
        {
          id: 100,
          taskTitle: 'Don\'t use disposable bag.',
          done: false,
        },
        {
          id: 101,
          taskTitle: 'Reuse mugcup',
          done: true,
        },
      ],
    };

    const state = reducer(initialState, deleteTodo(101));

    expect(state.tasks).toHaveLength(1);
  });

  it('completeTodo', () => {
    const initialState = {
      tasks: [
        { 
          id: 100, 
          taskTitle: 'Don\'t use disposable bag.', 
          done: false 
        },
        { 
          id: 101, 
          taskTitle: 'Reuse mugcup', 
          done: true 
        },
      ],
    };

    const state = reducer(initialState, completeTodo(100));

    expect(state.tasks[0].done).toBeTruthy();
    expect(state.tasks.length).toEqual(initialState.tasks.length);
  });

  it('addMission', () => {
    const initialState = {
      id: 102,
      tasks: [
        { 
          id: 100, 
          taskTitle: '밥먹기', 
          done: false 
        },
        { 
          id: 101, 
          taskTitle: '눕기', 
          done: true 
        },
      ],
    };
    
    const mission = {
      tasks: ['물론 씻은 뒤 분리배출하기', '이면지 사용하기']
    };

    const state = reducer(initialState, addMission(mission));

    expect(state.tasks.length).toEqual(4);
    expect(state.tasks[2].title).toBe('물론 씻은 뒤 분리배출하기');
    expect(state.tasks[3].title).toBe('이면지 사용하기');
  })
});
