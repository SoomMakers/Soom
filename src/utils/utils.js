export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function filterMissions(missions, answer = []) {
  const leng = missions.length;
  const randomValue = missions[Math.floor(Math.random() * leng)];

  if (answer.length === 5) {
    return answer;
  }

  if (answer.includes(randomValue)) {
    return filterMissions(missions, answer);
  }

  return filterMissions(missions, [...answer, randomValue]);
}
