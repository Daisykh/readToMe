import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Nav from '../../containers/Nav/Nav'

class Header extends Component {

  render() {
    return (
      <div id="header-section">
        <Nav />
        <h2>My Bookshelf</h2>
      </div>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object,
}

export default Header;