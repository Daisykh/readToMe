import * as actions from './index';
import mockData from '../__mocks__/mockData';

describe('all actions', () => {

  it('should return a type of LOAD_CARDS, with sample card data', () => {
    const cards = mockData;

    const expected = {
      type: 'LOAD_CARDS',
      cards
    }

    expect(actions.loadCards(cards)).toEqual(expected);
  })
});