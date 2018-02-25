import React, { Component } from 'react'
import './Nav.css'
import { NavLink, withRouter, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
       <nav role="navigation">
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
  }
}

export default Nav;