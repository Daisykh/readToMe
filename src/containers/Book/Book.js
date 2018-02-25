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

  submitAudio = () => {
    console.log('submit selected')
  }

  toggleRecord = () => {
    const recording = !this.state.recording
    console.log('toggled')
    this.setState({ 
      recording 
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
  }

  render() {
    const url = this.props.img
    const classList = this.state.recording ? "recording audio-button" : "audio-button"

    return (
      <div className="Book">

        <img src={url} alt="book display"/>
        <p>{this.props.text}</p>
        <div className="button-display">
          <button onClick={ this.toggleRecord } className={classList} >Record</button>
          <button onClick={ this.submitAudio } className="audio-button" >Submit</button>
        </div>
      </div>
    );
  }
}

export default Book;