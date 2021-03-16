import continents from '../fixtures/continents';

export default function fetchPost({ continent }) {
  return continents[continent].posts;
}
