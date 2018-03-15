import React, { Component } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      streak: '',
      lifeTimeReading: '',
      // language: 'en-US'
    }
  }

  async componentDidMount() {
    const streak = this.pullFromStorage('streakCount');
    const lifeTimeReading = this.pullFromStorage('lifeTimeCount');
    // const language = this.pullFromStorage('language')
    await this.setState({ streak, lifeTimeReading
      // , language 
    })
  }

  pullFromStorage = (category) => {
    const retrievedObject = localStorage.getItem(category);
    const parsedObject = JSON.parse(retrievedObject);

    return parsedObject;
  }

  // putIntoStorage = (category, value) =>  {
  //   const stringifiedObject = JSON.stringify(value);

  //   localStorage.setItem(category, value);
  // }

  // updateLanguage = (e) => {
  //   const language = e.target.value;
  //   this.setState({ language });
  //   this.putIntoStorage('language', language)
  // }

  render() {

    const streak = this.pullFromStorage('streakCount');
    const lifeTimeReading = this.pullFromStorage('lifeTimeCount');

    return (
      <div id="header-section">
        <Nav />
        <div className="header-text">
          <h2 className="title">My Bookshelf</h2>
          <div className="reading-scores" >
            <span className="score">
              <h4 className="score-text">Streak</h4><h4 className="score-text">{streak}</h4>
            </span>
            <span className="score">
              <h4 className="score-text">All-Time</h4><h4 className="score-text">{lifeTimeReading}</h4>
            </span>
          </div>
        </div>
      </div>
    );
  }

};

export default Header;



            // <div id="div_language">
            //   <select id="select_language" onChange={(event) => this.updateLanguage(event)}>
            //     <option value="en-US">English</option>
            //     <option value="es-MX">Spanish</option>
            //   </select>
            // </div>