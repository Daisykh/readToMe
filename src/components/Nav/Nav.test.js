import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Nav />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
