import React, { Component } from 'react';
const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
const io = require('socket.io-client');


class Book extends Component {
  constructor(props) {
    super(props)

    this.micStream 
  }

  createMic = () => {
     this.micStream = new MicrophoneStream();
  }


  recordAudio = async () => {

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

  stopRecording = () => {
    console.log('stop selected')
    this.micStream.stop()

  }

  submitAudio = () => {
    console.log('submit selected')
  }

  render() {
    const url = this.props.img

    return (
      <div className="Book">
        <p>I'm a Book!</p>
        <img src={url} />
        <p>{this.props.text}</p>
        <button onClick={ this.recordAudio } >Record</button>
        <button onClick={ this.stopRecording } >Stop Recording</button>
        <button onClick={ this.submitAudio } >Submit</button>
      </div>
    );
  }
}

export default Book;