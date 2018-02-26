/* eslint-disable */

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<App />)
  })

  it('should match snapshot', () => {

    expect(renderedComponent).toMatchSnapshot()
  })
})
