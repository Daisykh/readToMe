/* eslint-disable */

import { cardsReducer } from './cardsReducer';
import * as actions from '../../actions';
import mockData from '../../__mocks__/mockData';

describe('cardsReducer', () => {
  
  it('should return the default state', () => {
    const expected = [];

    expect(cardsReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with an array card objects', () => {
    const expected = mockData;

    expect(cardsReducer(undefined, actions.loadCards(mockData))).toEqual(expected);
  })

})