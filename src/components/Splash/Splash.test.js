/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Splash />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
