import React, { Component } from 'react';
import './App.css';
import BookShelf from '../../containers/BookShelf/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>I'm the App!</p>
        <BookShelf /> 
      </div>
    );
  }
}

export default App;
