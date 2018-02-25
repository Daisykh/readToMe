import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Nav from '../../containers/Nav/Nav'

class Header extends Component {

  render() {
    return (
      <div id="header-section">
        <Nav />
        <p>I'm the header</p>
      </div>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object,
}

export default Header;