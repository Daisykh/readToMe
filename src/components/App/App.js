import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Splash from '../../components/Splash/Splash'
import './App.css';
import BookShelf from '../../containers/BookShelf/BookShelf';
import mockData from '../../__mocks__/mockData';
import Book from '../../containers/Book/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Splash } />
        <Route exact path='/bookshelf' component={ BookShelf } />
        <Route exact path="/cards/:id" render={ ({match}) => {
          const id = parseInt(match.params.id);
          const card = mockData.find( card => {
            return card.id === id
          })
          if (card) {
            return (
              <Book {...card}/>
            )
          }

        }} /> 
      </div>
    );
  }
}

export default App;

// Put the routes in here
// or pull out and put it in a routes components
// <Route exact path='/' component={ Splash }/>
  // <Route exact path='/first' component={ BookShelf } />