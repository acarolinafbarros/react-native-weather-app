import { formatWeatherData, formatForecastData } from './helpers';
import {
  ForecastState,
  WeatherState,
} from '../navigation/screens/Home/HomeScreen.types';
import { ForecastList } from './data.types';

const APP_API_KEY: string = '957018ba3621cc9423b7eb2aa860335b';
const BASE_URL: string = 'https://api.openweathermap.org/data/2.5';

/**
 * Get weather from coordinates (latitude and longitude )
 * @param {number} lat - latitude value
 * @param {number} long - longitude
 * 
 * @returns Promise<WeatherState> - weather data
 */
export function getWeather(lat: number, long: number): Promise<WeatherState> {
  return fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${long}&appid=${APP_API_KEY}`,
  )
    .then(res => res.json())
    .then(weather => {
      return formatWeatherData(weather);
    });
}

/**
 * Get forecast from coordinates (latitude and longitude )
 * @param {number} lat - latitude value
 * @param {number} long - longitude
 * 
 * @returns Promise<ForecastState[]> - forecast data
 */
export function getForecast(
  lat: number,
  long: number,
): Promise<ForecastState[]> {
  return fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${long}&appid=${APP_API_KEY}`,
  )
    .then(res => res.json())
    .then(forecastData => {
      if (Object.entries(forecastData).length) {
        return forecastData.list
          .filter((forecast: ForecastList) => forecast.dt_txt.match(/09:00:00/))
          .map(formatForecastData);
      }
    });
}

/**
 * Get weather from city name
 * @param {string} city - city
 * 
 * @returns Promise<WeatherState> - weather city data
 */
export function getCityWeather(city: string): Promise<WeatherState>  {
  return fetch(`${BASE_URL}/weather?q=${city}&appid=${APP_API_KEY}`)
    .then(res => res.json())
    .then(weather => {
      return formatWeatherData(weather);
    });
}

/**
 * Get forecast (5 days) from city name
 * @param {string} city - city
 * 
 * @returns Promise<ForecastState[]> - forecast city data
 */
export function getCityForecast(city: string): Promise<ForecastState[]> {
  return fetch(`${BASE_URL}/forecast?q=${city}&appid=${APP_API_KEY}`)
    .then(res => res.json())
    .then(forecastData => {
      if (Object.entries(forecastData).length) {
        return forecastData.list
          .filter((forecast: ForecastList) => forecast.dt_txt.match(/09:00:00/))
          .map(formatForecastData);
      }
    });
}
