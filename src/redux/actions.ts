import { AddAction, RemoveAction } from './types';
import { CardProps as Card } from './../components/Card/Card.types';

export const ADD_FAVORITE_CARD = 'ADD_FAVORITE_CARD';
export const REMOVE_FAVORITE_CARD = 'REMOVE_FAVORITE_CARD';

// Triggered when a card weather is added as a favorite
export const addFavorite = (card: Card): AddAction => {
  return {
    type: ADD_FAVORITE_CARD,
    payload: card,
  };
};

// Triggered when a card weather is removed as a favorite
export const removeFavorite = (id: number): RemoveAction => {
  return {
    type: REMOVE_FAVORITE_CARD,
    payload: id,
  };
};
