/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {

  let renderedComponent

  beforeEach(() => {
    const renderedComponent = shallow(<Book />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should have a default recording and activity states of false', () => {
    const renderedComponent = shallow(<Book />);

    expect(renderedComponent.state('recording')).toEqual(false);
    expect(renderedComponent.state('recorded')).toEqual(false);
    expect(renderedComponent.state('submitted')).toEqual(false);
    expect(renderedComponent.state('feedbackGiven')).toEqual(false);
  })

  it('function toggleSubmit should set the state of submitted to true', () => {
    const renderedComponent = shallow(<Book />);
    const expected = true;

    expect(renderedComponent.state('submitted')).toEqual(false)

    renderedComponent.instance().toggleSubmit()

    expect(renderedComponent.state('submitted')).toEqual(expected)
  })

  it('function userFeedback should set the state of feedbackGiven to true', () => {
    const renderedComponent = shallow(<Book />);
    const expected = true;

    expect(renderedComponent.state('feedbackGiven')).toEqual(false)

    renderedComponent.instance().userFeedback()

    expect(renderedComponent.state('feedbackGiven')).toEqual(expected)
  })

  // userFeedback should call resetRecord()

  it('function resetRecord should reset the states of recording and recorded to false', () => {
    const renderedComponent = shallow(<Book />);
    const expected = true;

    renderedComponent.setState({
      recording: true,
      recorded: true,
    })

    expect(renderedComponent.state('recording')).toEqual(true)
    expect(renderedComponent.state('recorded')).toEqual(true)

    renderedComponent.instance().resetRecord()

    expect(renderedComponent.state('recording')).toEqual(false)
    expect(renderedComponent.state('recorded')).toEqual(false)

  })

  it('function userFeedback should call resetRecord()', () => {
    const renderedComponent = shallow(<Book />);

    expect(renderedComponent.instance().userFeedback()).toBe(true);

    expect(renderedComponent.resetRecord).toHaveBeenCalled();
  })


  // expect(wrapper.instance()._method()).toBe(true);
    // expect(MyComponent.prototype._method).toHaveBeenCalled();
})


// recordAudio creates a new instance of mic

// submitAudio calls toggleSubmit and userFeedback

// userFeedback sends an alert
// userFeedback calls resetRecord

// toggleRecord calls checkAudio

// checkAudio calls recordAudio when state is recording
// checkAudio calls stopAudio when state isn't recording

// When the user clicks record, toggleRecord is called
// When the user clicks submit, submitAudio is called

