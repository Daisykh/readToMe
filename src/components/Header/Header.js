import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

export const Header = () =>  {
  return (
    <div id="header-section">
      <Nav />
      <h2>My Bookshelf</h2>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object
};

export default Header;