import {
  ForecastState,
  WeatherState,
} from '../navigation/screens/Home/HomeScreen.types';
import { WeatherResponse, ForecastList } from './data.types';

/**
 * Format weather data into a object with a specific structure
 * @param {WeatherResponse} data - weather data
 *
 * @returns {WeatherState} - weather data formatted
 */
export function formatWeatherData(data: WeatherResponse): WeatherState {
  return {
    cityId: data.id,
    country: data.sys.country,
    date: new Date(data.dt * 1000).toDateString(),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    name: data.name,
    temperature: (data.main.temp / 10).toFixed(1),
    temperatureMax: (data.main.temp_max / 10).toFixed(1),
    temperatureMin: (data.main.temp_min / 10).toFixed(1),
  };
}

/**
 * Format forecast data into a object with a specific structure
 * @param {ForecastList}  data - forecast data
 *
 * @returns {ForecastState} - forecast data formatted
 */
export function formatForecastData(data: ForecastList): ForecastState {
  return {
    id: data.dt,
    date: new Date(data.dt * 1000).toDateString(),
    temperature: (data.main.temp / 10).toFixed(1),
  };
}
