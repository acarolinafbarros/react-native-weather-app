import { CardProps as Card } from './../components/Card/Card.types';
import { reducers } from './reducers';

export type AddAction = {
  type: 'ADD_FAVORITE_CARD';
  payload: Card;
};

export type RemoveAction = {
  type: 'REMOVE_FAVORITE_CARD';
  payload: number;
};

export type FavoriteState = {
  id: number;
  isFavorite: boolean;
  weather: {
    cityId: number;
    country: string;
    temperature: string;
    temperatureMax: string;
    temperatureMin: string;
    description: string;
    icon: string;
    date: string;
    name: string;
  };
  forecast: [
    {
      date: string;
      id: number;
      temperature: string;
    },
  ];
};

export type CardAction = {
  type: string;
  payload: FavoriteState;
};

export type RootState = ReturnType<typeof reducers>;

export type DispatchType = (args: CardAction) => CardAction;
