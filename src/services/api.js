import continents from '../fixtures/continents';

import missions from '../fixtures/missions';

export function fetchPost({ continent }) {
  return continents[continent].posts;
}

export function fetchMission() {
  return missions;
}

export async function postPicture({ ImageSource }) {
  const API_ENDPOINT = 'https://fierce-beyond-91643.herokuapp.com';

  const response = await fetch(`${API_ENDPOINT}/upload`, {
    method: 'post',
    body: ImageSource,
  });

  const { data } = await response.json();

  return data;
}
