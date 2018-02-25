import React, { Component } from 'react';
import './Book.css'
const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
const io = require('socket.io-client');



class Book extends Component {
  constructor(props) {
    super(props)

    this.micStream 

    this.state = {
      recording: false,
    }
  }

  createMic = () => {
     this.micStream = new MicrophoneStream();
  }


  recordAudio = async () => {

    this.toggleRecord();


    const testSocket = io.connect('http://localhost:5000');
    testSocket.on('connect', (data) => {
      testSocket.emit('join', 'Hello World from client');
    })

    // this.createMic();
    // console.log('record selected');
    // const micStream = this.micStream
    // getUserMedia({ video: false, audio: true })
    //   .then(function(stream) {
    //    micStream.setStream(stream);
    //   }).catch(function(error) {
    //     console.log(error);
    //   })

    //   this.micStream.on('data', function(chunk) {
    //     const raw = MicrophoneStream.toRaw(chunk);
    //     console.log(raw)
    //   })
  }

  stopRecording = () => {
    console.log('stop selected')
    this.micStream.stop()
  }

  submitAudio = () => {
    console.log('submit selected')
  }

  toggleRecord = () => {
    const recording = !this.state.recording
    console.log('toggled')
    this.setState({
      recording: recording
    })
    // this.state.recording = !this.state.recording
  }

  render() {
    const url = this.props.img

    return (
      <div className="Book">

        <img src={url} alt="book display"/>
        <p>{this.props.text}</p>
        <div className="button-display">
          <button onClick={ this.recordAudio } className="audio-buttons" >Record</button>
          <button onClick={ this.submitAudio } className="audio-buttons" >Submit</button>
        </div>
      </div>
    );
  }
}

export default Book;