/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {

  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Book />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should have a default recording and activity states of false', () => {
    expect(renderedComponent.state('recording')).toEqual(false);
    expect(renderedComponent.state('recorded')).toEqual(false);
    expect(renderedComponent.state('submitted')).toEqual(false);
    expect(renderedComponent.state('feedbackGiven')).toEqual(false);
  })

  it('function toggleSubmit should set the state of submitted to true', () => {
    const expected = true;

    expect(renderedComponent.state('submitted')).toEqual(false)
    renderedComponent.instance().toggleSubmit()
    expect(renderedComponent.state('submitted')).toEqual(expected)
  })

  it('function userFeedback should set the state of feedbackGiven to true', () => {
    const expected = true;

    expect(renderedComponent.state('feedbackGiven')).toEqual(false)
    renderedComponent.instance().userFeedback()
    expect(renderedComponent.state('feedbackGiven')).toEqual(expected)
  })

  it('function resetRecord should reset the states of recording and recorded to false', () => {
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

  it('method userFeedback should call method resetRecord()', () => {
    renderedComponent.instance().resetRecord = jest.fn();
    renderedComponent.instance().userFeedback();

    expect(renderedComponent.instance().resetRecord).toHaveBeenCalled();
  })

  it('method submitAudio should call method toggleSubmit', () => {
    renderedComponent.instance().toggleSubmit = jest.fn();
    expect(renderedComponent.instance().toggleSubmit).not.toHaveBeenCalled();

    renderedComponent.instance().submitAudio();

    expect(renderedComponent.instance().toggleSubmit).toHaveBeenCalled();
  })

  it('method submitAudio should call method userFeedback', () => {
    renderedComponent.instance().userFeedback = jest.fn();
    expect(renderedComponent.instance().userFeedback).not.toHaveBeenCalled();

    renderedComponent.instance().submitAudio();

    expect(renderedComponent.instance().userFeedback).toHaveBeenCalled();
  })

  it('method checkAudio should call method recordAudio and not stopAudio if the app is recording', () => {
    renderedComponent.setState({
      recording: true
    })

    renderedComponent.instance().recordAudio = jest.fn();
    renderedComponent.instance().stopAudio = jest.fn();

    expect(renderedComponent.instance().recordAudio).not.toHaveBeenCalled();
    expect(renderedComponent.instance().stopAudio).not.toHaveBeenCalled();

    renderedComponent.instance().checkAudio();

    expect(renderedComponent.instance().recordAudio).toHaveBeenCalled();
    expect(renderedComponent.instance().stopAudio).not.toHaveBeenCalled();
  })


  it('method checkAudio should call method stopAudio and not recordAudio if the app is not recording', () => {
    renderedComponent.setState({
      recording: false
    })

    renderedComponent.instance().recordAudio = jest.fn();
    renderedComponent.instance().stopAudio = jest.fn();

    expect(renderedComponent.instance().recordAudio).not.toHaveBeenCalled();
    expect(renderedComponent.instance().stopAudio).not.toHaveBeenCalled();

    renderedComponent.instance().checkAudio();

    expect(renderedComponent.instance().stopAudio).toHaveBeenCalled();
    expect(renderedComponent.instance().recordAudio).not.toHaveBeenCalled();
  })
})
