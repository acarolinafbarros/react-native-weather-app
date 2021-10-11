export type ForecastList = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: 1007;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastList[];
};

export type WeatherResponse = {
  id: number;
  name: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  sys: {
    id: number;
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  dt: number;
};
