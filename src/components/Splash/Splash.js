import React from 'react';
import './Splash.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Splash = () =>  {
  return (
    <div id="splash-page">
      <div id="layer">
        <div id="blur"></div>
        <h1 id="logo">Read To Me</h1>
        <Link to="/bookshelf" className="link-button">1st Grade</Link>
        <Link to="/bookshelf" className="link-button">2nd Grade</Link>
        <Link to="/bookshelf" className="link-button">3rd Grade</Link>
      </div>
    </div>
  );
};

Splash.propTypes = {
  location: PropTypes.object
};

export default Splash;