/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Book />);

    expect(renderedComponent).toMatchSnapshot();
  })
})


// recordAudio creates a new instance of mic

// submitAudio calls toggleSubmit and userFeedback

// toggleSubmit sets state 
// userFeedback sets state
// userFeedback sends an alert
// userFeedback calls resetRecord

// resetRecord sets state

// toggleRecord sets state
// toggleRecord calls checkAudio

// checkAudio calls recordAudio when state is recording
// checkAudio calls stopAudio when state isn't recording

// When the user clicks record, toggleRecord is called
// When the user clicks submit, submitAudio is called

