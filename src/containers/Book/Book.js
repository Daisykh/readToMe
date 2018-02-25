import React, { Component } from 'react';
import './Book.css'
const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
const io = require('socket.io-client');

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recording: false,
      recorded: false, 
      submitted: false,
      feedbackGiven: false,
    }

    this.micStream 
  }

  createMic = () => {
     this.micStream = new MicrophoneStream();
  }

  recordAudio = async () => {
    console.log('recording')
    const testSocket = io.connect('http://localhost:5000');
    testSocket.on('connect', (data) => {
      testSocket.emit('join', 'Hello World from client');
    })

    this.createMic();
    console.log('record selected');
    const micStream = this.micStream
    getUserMedia({ video: false, audio: true })
      .then(function(stream) {
       micStream.setStream(stream);
      }).catch(function(error) {
        console.log(error);
      })

    this.micStream.on('data', function(chunk) {
      const raw = MicrophoneStream.toRaw(chunk);
      console.log(raw)
    })
  }

  submitAudio = async () => {
   await console.log('submit selected');
   await this.toggleSubmit();
   await this.userFeedback();
  }

  toggleSubmit = () => {
    this.setState({
      submitted: true
    })
  }

  userFeedback = async () => {
    alert('Good job! You read the passage correctly');
    this.resetRecord();
    this.setState({
      feedbackGiven: true
    })
  }

  resetRecord = () => {
    this.setState({
      recording: false,
      recorded: false, 
    })
  }

  toggleRecord = () => {
    const recording = !this.state.recording;
    console.log('toggled')
    this.setState({ 
      recording: recording,
      submitted: false,
      feedbackGiven: false
    }, this.checkAudio);
  }

  checkAudio = () => {
    if (this.state.recording) {
      this.recordAudio();
    }

    if (!this.state.recording) {
      this.stopAudio();
    }
  }

  stopAudio = () => {
    console.log('stop selected')
    this.micStream.stop()
    this.setState({
      recorded: true
    })
  }

  render() {
    const url = this.props.img
    const activeRecord = this.state.recording ? "recording" : "enabled-record" ;
    const disableRecord = this.state.recorded && !this.state.recording ? "disabled-record": "";
    const disabledSubmit = this.state.recorded && !this.state.recording ? "" : "disabled-submit";
    const successfulSubmit = this.state.submitted ? "successful-submit" : "enabled-submit"

    return (
      <div className="Book">

        <img src={url} alt="book display"/>
        <p>{this.props.text}</p>
        <div className="button-display">
          <button onClick={ this.toggleRecord } id={disableRecord} className={activeRecord} >Read To Me!</button>
          <button onClick={ this.submitAudio } id={disabledSubmit} className={successfulSubmit} >Check</button>
        </div>
      </div>
    );
  }
}

export default Book;