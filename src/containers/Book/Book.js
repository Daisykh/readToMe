import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SpeechRecognition from 'react-speech-recognition'
import './Book.css';
import Header from '../../components/Header/Header';
// const getUserMedia = require('get-user-media-promise');
// const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
// const io = require('socket.io-client');
// const ss = require('socket.io-stream');
// const inspect = require('inspect-stream');

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectedValue: 'The quick brown fox jumps over the lazy dog',
      supportVoice: 'webkitSpeechRecognition' in window,
      recording: false,
      recorded: false, 
      submitted: false,
      feedbackGiven: false,
      endpoint: "http://localhost:5000"
    };

      this.micStream;
      this.testSocket;
  }

  componentDidMount() {
    this.transcribeSpeech()
  }

  // createMic = () => {
  //   this.micStream = new MicrophoneStream({ objectMode: false });
  // }


  recordAudio = () => {
    console.log('recording');

    // this.speech = window.SpeechRecognition ? window.SpeechRecognition : window.webkitSpeechRecognition;

    // const recognition = new SpeechRecognition();
    // recognition.interimResults = true;
    // recognition.start();

    // // socket setup
    // const socket = io.connect(this.state.endpoint);
    // const socketStream = ss.createStream({ objectMode: false });
    // ss(socket).emit('audio', socketStream)

    // // mic setup
    // this.createMic();
    // const micStream = this.micStream;

    // // grab mic input
    // getUserMedia({ video: false, audio: true })
    //   .then(function(stream) {
    //     micStream.setStream(stream);
    //   }).catch(function(error) {
    //     console.log(error);
    //   });

    // this.micStream.on('data', function(chunk) {
    //   const raw = MicrophoneStream.toRaw(chunk);
    //   console.log(raw);
    // });

    // // pipe to server
    // this.micStream.pipe(socketStream)
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
    this.compareAudio();
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
    // this.testSocket.emit('disconnect');
  };

  toggleRecord = () => {
    this.say()
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
    // this.micStream.stop();
    this.setState({
      recorded: true
    });
  };


  transcribeSpeech = () => {

    console.log('recording');

    if (this.state.supportVoice) {
      const WebkitSpeechRecognition = window.webkitSpeechRecognition;
      this.recognition = new WebkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: finalTranscript,
            });
            if (this.props.onChange) this.props.onChange(finalTranscript);
            if (this.props.onEnd) this.props.onEnd(finalTranscript);
          } else {
            interimTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: interimTranscript,
            });
            if (this.props.onChange) this.props.onChange(interimTranscript);
          }
        }
      };
    }
  }


  say() {
    if (this.state.supportVoice) {
      if (!this.state.speaking) {
        // start listening
        this.recognition.start();
      } else {
        this.recognition.stop();
        const question = this.state.inputValue;
      }
      this.setState({
        speaking: !this.state.speaking,
        inputValue: '',
      });
    }
  }

  compareAudio = () => {
    if(this.state.inputValue === this.state.selectedValue.toLowerCase()) {
      alert('Good job! You read the sentence correctly! Keep reading!');
    } else {
      alert('Good effort - try one more time');
    }
  }

  render() {

    const url = this.props.img;
    const activeRecord = this.state.recording ? "recording" : "enabled-record" ;
    const disableRecord = this.state.recorded && !this.state.recording ? "disabled-record": "";
    const disabledSubmit = this.state.recorded && !this.state.recording ? "" : "disabled-submit";
    const successfulSubmit = this.state.submitted ? "successful-submit" : "enabled-submit";
    const recordText =this.state.recording ? "Stop Recording" : "Record" ;
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    return (
      <div className="Book">
        <Header />
        <img src={url} alt="book display"/>
        <p>{this.props.text}</p>
        <p>{this.state.inputValue}</p>
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