import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Splash from '../../components/Splash/Splash'
import './App.css';
import BookShelf from '../../containers/BookShelf/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf />
      </div>
    );
  }
}

export default App;

// Put the routes in here
// or pull out and put it in a routes components
// <Route exact path='/' component={ Splash }/>
  // <Route exact path='/first' component={ BookShelf } />