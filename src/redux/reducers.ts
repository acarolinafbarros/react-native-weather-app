import { combineReducers } from 'redux';
import { ADD_FAVORITE_CARD, REMOVE_FAVORITE_CARD } from './actions';
import { CardAction, FavoriteState } from './types';

const initialState: FavoriteState[] = [];

export const cardReducer = (
  favorites: FavoriteState[] = initialState,
  action: CardAction,
): FavoriteState[] => {
  if (action.type === ADD_FAVORITE_CARD) {
    if (!favorites.some(fav => fav.id === action.payload.id)) {
      return [...favorites, action.payload];
    }
    return favorites;
  }

  if (action.type === REMOVE_FAVORITE_CARD) {
    return favorites.filter(fav => fav.id !== action.payload.id);
  }
  return favorites;
};

export const reducers = combineReducers({
  favorites: cardReducer,
});
