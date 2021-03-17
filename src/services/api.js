import continents from '../fixtures/continents';
import missions from '../fixtures/missions';

export function fetchPost({ continent }) {
  return continents[continent].posts;
}

export function fetchMission() {
  return missions;
}
