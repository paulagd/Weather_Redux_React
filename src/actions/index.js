import axios from 'axios';

const API_KEY= '06751be749c4bdbe96a5a3f3d0973c3a';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);   //PROMISE


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
