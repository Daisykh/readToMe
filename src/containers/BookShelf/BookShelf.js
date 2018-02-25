import React, { Component } from 'react';
import BookThumbNail from '../BookThumbNail/BookThumbNail';
import mockData from '../../__mocks__/mockData';
import Book from '../Book/Book';
import { Route } from 'react-router-dom';
import './BookShelf.css';
import Nav from '../Nav/Nav';
import Header from '../../components/Header/Header';


class BookShelf extends Component {
  render() {
    return (
      <div className="BookShelf">
        <Header />
        <BookThumbNail />
      </div>
  
    );
  }
}

export default BookShelf;


