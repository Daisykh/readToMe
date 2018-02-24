import React, { Component } from 'react';
import BookThumbNail from '../BookThumbNail/BookThumbNail';
import mockData from '../../__mocks__/mockData';
import Book from '../Book/Book';
import { Route } from 'react-router-dom';
import './BookShelf.css'
import Nav from '../Nav/Nav';
import Header from '../../components/Header/Header';


class BookShelf extends Component {
  render() {
    return (
      <div className="BookShelf">
        <Header />
        <Route exact path='/first' component={BookThumbNail} />
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