import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import Header from '../../components/Header/Header';
const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
const io = require('socket.io-client');
var ss = require('socket.io-stream');
const inspect = require('inspect-stream');


class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      recorded: false, 
      submitted: false,
      feedbackGiven: false,
      endpoint: "http://localhost:5000"
    };

    this.micStream;
    this.testSocket;
  }

  createMic = () => {
    this.micStream = new MicrophoneStream({ objectMode: false });
  }

  recordAudio = () => {
    console.log('recording');

    // socket setup
    const socket = io.connect(this.state.endpoint);
    const socketStream = ss.createStream({ objectMode: false });
    ss(socket).emit('audio', socketStream)

    // mic setup
    this.createMic();
    const micStream = this.micStream;

    // grab mic input
    getUserMedia({ video: false, audio: true })
      .then(function(stream) {
        micStream.setStream(stream);
      }).catch(function(error) {
        console.log(error);
      });

    this.micStream.on('data', function(chunk) {
      const raw = MicrophoneStream.toRaw(chunk);
      console.log(raw);
    });

    // pipe to server
    this.micStream.pipe(socketStream)
  };

  submitAudio = () => {
    console.log('submit selected');
    this.toggleSubmit();
    this.userFeedback();
  };

  toggleSubmit = () => {
    this.setState({
      submitted: true
    });
  };

  userFeedback = () => {
    alert('Good job! You read the sentence correctly! Keep reading!');
    this.resetRecord();
    this.setState({
      feedbackGiven: true
    });
  };

  resetRecord = () => {
    this.setState({
      recording: false,
      recorded: false, 
    });
    this.testSocket.emit('disconnect');
  };

  toggleRecord = () => {
    const recording = !this.state.recording;
    console.log('toggled');
    this.setState({ 
      recording: recording,
      submitted: false,
      feedbackGiven: false
    }, this.checkAudio);
  };

  checkAudio = () => {
    if (this.state.recording) {
      this.recordAudio();
    }

    if (!this.state.recording) {
      this.stopAudio();
    }
  };

  stopAudio = () => {
    console.log('stop selected');
    this.micStream.stop();
    this.setState({
      recorded: true
    });
  };

  render() {
    const url = this.props.img;
    const activeRecord = this.state.recording ? "recording" : "enabled-record" ;
    const disableRecord = this.state.recorded && !this.state.recording ? "disabled-record": "";
    const disabledSubmit = this.state.recorded && !this.state.recording ? "" : "disabled-submit";
    const successfulSubmit = this.state.submitted ? "successful-submit" : "enabled-submit";
    const recordText =this.state.recording ? "Stop Recording" : "Record" ;

    return (
      <div className="Book">
        <Header />
        <img src={url} alt="book display"/>
        <p>{this.props.text}</p>
        <div className="button-display">
          <button onClick={ this.toggleRecord } id={disableRecord} className={activeRecord} >{recordText}</button>
          <button onClick={ this.submitAudio } id={disabledSubmit} className={successfulSubmit} >Check Reading</button>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};

export default Book;