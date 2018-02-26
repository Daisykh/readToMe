/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import mockData from '../../__mocks__/mockData';
import { Routes, mapStateToProps } from './Routes';

describe('Routes', () => {

  it('should match snapshot', () => {
    const renderedComponent = shallow(<Routes />);

    expect(renderedComponent).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      cards: mockData
    }
    const mapped = mapStateToProps(mockStore)

    expect(mapped).toEqual(mockStore)
  });
})
