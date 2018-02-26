import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer/cardsReducer'

const rootReducer = combineReducers({
  cards: cardsReducer
});

export default rootReducer;