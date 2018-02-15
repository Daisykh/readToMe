import React, { Component } from 'react';
import BookThumbNail from '../BookThumbNail/BookThumbNail';
import mockData from '../../__mocks__/mockData';
import Book from '../Book/Book';
import { Route } from 'react-router-dom';


class BookShelf extends Component {
  render() {
    return (
      <div className="BookShelf">
        <p>I'm the BookShelf!</p>
        <Route exact path='/' component={BookThumbNail} />
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

export default BookShelf;