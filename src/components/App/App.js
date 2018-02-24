import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Splash from '../../components/Splash/Splash'
import './App.css';
import BookShelf from '../../containers/BookShelf/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Splash }/>
        <Route exact path='/first' component={ BookShelf } />
        <Route exact path='/second' component={ BookShelf } />
        <Route exact path='/third' component={ BookShelf } />
      </div>
    );
  }
}

export default App;
