import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="Nav">
      <nav>
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/bookshelf'>My Bookshelf</NavLink></li>
            <li><NavLink to='/bookshelf'>Favorites</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


export default Nav;