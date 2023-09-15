import convertAsteroids from '../utils/convertAsteroids';
import { COMMON_ERROR, NASA_ERROR } from '../assets/constants/messages';
import { NASA_BASE_URL } from '../assets/constants/urls';

export default async function fetchAsteroids(startDate = '', endDate = '') {
  let prevDate = '';
  let selfDateStart = '';
  let selfDateEnd = '';
  let nextDate = '';
  const date = new Date();
  const currentDate = date.toJSON().slice(0, 10);
  date.setDate(date.getDate() + 1);
  const tomorrow = date.toJSON().slice(0, 10);
  let asteroidList: AsteroidOnClient[] = [];
  if (selfDateStart === startDate && asteroidList.length) {
    return { asteroidList, isStart: selfDateStart === currentDate };
  }
  startDate = startDate ? startDate : currentDate;
  endDate = endDate ? endDate : tomorrow;

  console.log(startDate, endDate);

  try {
    const res = await fetch(`${NASA_BASE_URL}/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`);

    const data: ResponseData = await res.json();
    if (!res.ok) {
      throw new Error(NASA_ERROR);
    }
    console.log(data);
    const asteroids = [...data['near_earth_objects'][startDate], ...data['near_earth_objects'][endDate]];

    asteroidList = asteroids.map(convertAsteroids);
    prevDate = data.links.previous.split('=')[1].split('&')[0];
    selfDateStart = data.links.previous.split('=')[2].split('&')[0];
    selfDateEnd = data.links.next.split('=')[1].split('&')[0];
    nextDate = data.links.next.split('=')[2].split('&')[0];
    return { asteroidList, prevDate, selfDateStart, selfDateEnd, nextDate, isStart: selfDateStart === currentDate };
  } catch (error) {
    const message = error instanceof Error ? error.message : COMMON_ERROR;
    console.error(message);
    throw new Error(message);
  }
}
