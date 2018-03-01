import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer/cardsReducer';
import { alertsReducer } from 'react-redux-alerts';

const rootReducer = combineReducers({
  cards: cardsReducer,
  alerts: alertsReducer
});

export default rootReducer;