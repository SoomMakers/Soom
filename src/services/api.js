import continents from '../fixtures/continents';

export function fetchPost({ continent }) {
    return continents[continent].posts
}