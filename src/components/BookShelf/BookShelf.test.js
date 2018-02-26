import React from 'react';
import { shallow } from 'enzyme';
import BookShelf from './BookShelf';

describe('BookShelf', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<BookShelf />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
