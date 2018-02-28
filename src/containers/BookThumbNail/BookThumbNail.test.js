/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import { BookThumbNail, mapStateToProps, mapDispatchToProps, loadCards } from './BookThumbNail';
import mockData from '../../__mocks__/mockData';

describe('BookThumbNail', () => {
  let renderedComponent
  let mockLoadCards
  let mockCards

  // beforeEach(() => {

  // });

  it('should match snapshot', () => {
    const mockLoadCards = jest.fn()
    const mockCards = mockData

    const renderedComponent = 
    shallow(<BookThumbNail 
      cards={ mockData }
      loadCards={ mockLoadCards }
      />, { disableLifecycleMethods: true });
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      cards: mockData
    }
    const mapped = mapStateToProps(mockStore)

    expect(mapped).toEqual(mockStore)
  });

  it('should call the dispatch function when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mockStore = {
      cards: mockData
    }
    const mapped = mapDispatchToProps(mockDispatch);

    expect(mockDispatch).not.toHaveBeenCalled();

    mapped.loadCards(mockStore);

    expect(mockDispatch).toHaveBeenCalled();
  });
})
