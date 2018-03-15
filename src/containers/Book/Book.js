import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateReader } from '../../actions/index';
// import SpeechRecognition from 'react-speech-recognition'
import './Book.css';
import Header from '../../components/Header/Header';
// const getUserMedia = require('get-user-media-promise');
// const MicrophoneStream = require('microphone-stream');
// const socket = io('http://localhost:5000/');
// const io = require('socket.io-client');
// const ss = require('socket.io-stream');
// const inspect = require('inspect-stream');
import EReader from '../EReader/EReader'
import { ReactReader } from 'react-reader';
import { createAlert } from 'react-redux-alerts';
import sizeMe from 'react-sizeme';
import Confetti from 'react-confetti';

// import EReader from '../../EReader/EReader'

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Read to me!',
      selectedValue: '',
      supportVoice: 'webkitSpeechRecognition' in window,
      recording: false,
      recorded: false, 
      submitted: false,
      feedbackGiven: false,
      endpoint: "http://localhost:5000",
      clicked: false,
      clickCount: 0,
      correct: false,
      incorrect: false,
      streakCount: 0,
      lifeTimeCount: 0,
      language: 'en-US',
    };

      this.micStream;
      this.testSocket;
  }

  componentDidMount() {
    this.transcribeSpeech()
    const lifeTimeCount = this.pullFromStorage('lifeTimeCount')
    // const language = this.pullFromStorage('language');
    this.setState({ lifeTimeCount,
     // language 
   });

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
    console.log('streak: ', this.state.streakCount)
    console.log('all: ', this.state.lifeTimeCount)
    // this.testSocket.emit('disconnect');
  };

  toggleRecord = () => {
    this.say()
    const recording = !this.state.recording;
    console.log('toggled');
    this.setState({ 
      recording: recording,
      submitted: false,
      feedbackGiven: false,
      correct: false,
      incorrect: false,
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
      const language = this.state.language;
      this.recognition = new WebkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = language;
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

  compareAudio = async () => {
    if(this.state.inputValue === this.state.selectedValue.toLowerCase()) {
      const newStreakCount = this.state.streakCount + 1;
      const newLifeTimeCount = this.state.lifeTimeCount + 1;
      await this.setState({
        correct: true,
        streakCount: newStreakCount,
        lifeTimeCount: newLifeTimeCount,
      })
      await this.putIntoStorage('streakCount', this.state.streakCount);
      await this.putIntoStorage('lifeTimeCount', this.state.lifeTimeCount);

    } else {
      await this.setState({
        incorrect: true,
        streakCount: 0
      })
      await this.putIntoStorage('streakCount', this.state.streakCount);
      await this.putIntoStorage('lifeTimeCount', this.state.lifeTimeCount);
    }
  }

  putIntoStorage = (category, value) =>  {
    const stringifiedObject = JSON.stringify(value);

    localStorage.setItem(category, value);
  }

  pullFromStorage = (category) => {
    const retrievedObject = localStorage.getItem(category);
    const parsedObject = JSON.parse(retrievedObject);

    return parsedObject;
  }

  handleClick = async (e) => {
    const newClickCount = await this.state.clickCount + 1;
    const newInput = await this.updateInputValue();
    // const newSource = await this.updateSourceFile();
    await this.setState({
      selected: true,
      clickCount: newClickCount,
      selectedValue: newInput,
      // sourceFile: newSource
    })
  }

  updateSourceFile = () => {
    if (this.state.clickCount === 0) {
      return "./Cover1.png"
    }

    if (this.state.clickCount === 1) {
      return "./page_1.png"
    }

    if (this.state.clickCount === 2) {
      return "./page_2.png"
    }

    if (this.state.clickCount === 3) {
      return "./page_3.png"
    }

    if (this.state.clickCount === 4) {
      return "./page_4.png"
    }

    if (this.state.clickCount > 4) {
      return "./page_5.png"
    }
  }

  updateInputValue = () => {
    if (this.state.clickCount === 0) {
      return "Zebra has a cough All his stripes have fallen off"
    }

    if (this.state.clickCount === 1) {
      return "Crocodile has lost his snap He's not a happy chap"
    }

    if (this.state.clickCount === 2) {
      return "Elephant doesn't feel too hot His Trunk is tied into a knot"
    }

    if (this.state.clickCount === 3) {
      return "What are we going to do Call for Doctor Kangaroo"
    }

    if (this.state.clickCount === 4) {
      return "Soon everyone is feeling well In fact they're feeling rather swell"
    }

    if (this.state.clickCount > 4) {
      return "Soon everyone is feeling well In fact they're feeling rather swell"
    }
  }

  updateLanguage = (e) => {
    const language = e.target.value;
    this.setState({ language })
  }


  render() {

    const activeRecord = this.state.recording ? "recording" : "enabled-record" ;
    const disableRecord = this.state.recorded && !this.state.recording ? "disabled-record": "";
    const disabledSubmit = this.state.recorded && !this.state.recording ? "" : "disabled-submit";
    const successfulSubmit = this.state.submitted ? "successful-submit" : "enabled-submit";
    const recordText =this.state.recording ? "Stop Recording" : "Record" ;
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
    const messageClass = this.state.correct ? "alert-overlay right" : ""
    const containerClass = this.state.correct ? "alert-container correct" : "alert-container"

    const bookImage = this.updateSourceFile();
    const inputValue = this.state.selectedValue

    const correctAnimation = this.state.correct ? "sparkles" : "" ;
    const incorrectAnimation = this.state.incorrect ? "reader-styling wiggle" : "reader-styling" ;
    const spoken = "spoken";

    return (
      <div className="book">
        <Header />
        <div className="reader-display">
          <h3 className="book-title">Doctor Kangaroo</h3>
          <img onClick={this.handleClick} src={require(`${bookImage}`)} alt="book display"/>
          <div className="reader-styling">
            <p >{inputValue}</p>
          </div>
          <div className={incorrectAnimation}>
            <p className={correctAnimation}>{this.state.inputValue}</p>
          </div>
          <div className="button-display">
            <button onClick={ this.toggleRecord } id={disableRecord} className={activeRecord} >{recordText}</button>
            <button onClick={ this.submitAudio } id={disabledSubmit} className={successfulSubmit} >Check Reading</button>
          </div>
          <div className={containerClass}>
            <div className="alert-overlay right" >
              <p className="alert-text">Good Job!</p>
              <p className="alert-text">Streak: {this.state.streakCount}</p>
            </div>
          </div>
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