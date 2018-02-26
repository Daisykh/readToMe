import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Book />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
