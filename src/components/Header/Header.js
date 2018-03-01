import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

export const Header = () =>  {
  return (
    <div id="header-section">
      <Nav />
      <h2 className="title">My Bookshelf</h2>
    </div>
  );
};

export default Header;