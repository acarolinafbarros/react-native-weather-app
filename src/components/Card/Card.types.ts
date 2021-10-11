type addFavoriteCallback = ({
  id,
  weather,
  forecast,
  isFavorite,
}: {
  id: number;
  weather: Weather;
  forecast: Forecast[];
  isFavorite: boolean;
}) => void;

type removeFavoriteCallback = ({ id }: { id: number }) => void;

type Weather = {
  cityId: number;
  country: string;
  date: string;
  description: string;
  icon: string;
  name: string;
  temperature: string;
  temperatureMax: string;
  temperatureMin: string;
};

export type Forecast = {
  date: string;
  id: number;
  temperature: string;
};

export type CardProps = {
  weatherData: Weather;
  forecastData: Forecast[];
  isFavorite: boolean;
  addFavoriteCb?: addFavoriteCallback;
  removeFavoriteCb?: removeFavoriteCallback;
};
