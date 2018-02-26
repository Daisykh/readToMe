/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import BookThumbNail from './BookThumbNail';

describe('BookThumbNail', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<BookThumbNail />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
