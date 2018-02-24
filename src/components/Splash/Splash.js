import React, { Component } from 'react';
import './Splash.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Splash extends Component {


  render() {
    return (
      <div id="splash-page">
        <div id="layer">
          <h1 id="logo">Read To Me</h1>
          <Link to="/first" className="link-button"><button>1st Grade</button></Link>
          <Link to="/first" className="link-button"><button>2nd Grade</button></Link>
          <Link to="/first" className="link-button"><button>3rd Grade</button></Link>
        </div>
      </div>
    )
  }
}

Splash.propTypes = {
  location: PropTypes.object,
}

export default Splash;