import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from '../../components/Splash/Splash';
import BookShelf from '../../components/BookShelf/BookShelf';
import Book from '../Book/Book';

export class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route exact path='/' component={ Splash } />
        <Route exact path='/bookshelf' component={ BookShelf } />
        <Route exact path="/cards/:id" render={ ({match}) => {
          const id = parseInt(match.params.id);
          const card = this.props.cards.find( card => {
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
};


export const mapStateToProps = (state) => ({
  cards: state.cards
})

export default withRouter(connect(mapStateToProps, null)(Routes));