import axios from 'axios';

import continents from '../fixtures/continents';

import missions from '../fixtures/missions';

// 로컬 서버 실패
const api = axios.create({
  baseURL: 'http://localhost:8008',
});

export function fetchPost({ continent }) {
  return continents[continent].posts;
}

export function fetchMission() {
  return missions;
}

export async function postPicture({ ImageSource }) {
  const { data: { data } } = await api.post('/upload', ImageSource);

  return data;
}
