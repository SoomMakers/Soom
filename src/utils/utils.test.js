import { filterMissions } from './utils';

test('filterMissions', () => {
  const missions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(filterMissions(missions)).toHaveLength(5);
});
