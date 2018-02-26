import React from 'react';
import BookThumbNail from '../../containers/BookThumbNail/BookThumbNail';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import './BookShelf.css';

export const BookShelf = () =>  {
  return (
    <div className="BookShelf">
      <Header />
      <BookThumbNail />
    </div>
  );
}

export default BookShelf;


