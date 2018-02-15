import React, { Component } from 'react';
import mockData from '../../__mocks__/mockData';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/index';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';

export class BookThumbNail extends Component {
  componentDidMount() {
    const flashCards = mockData;
    this.props.loadCards(flashCards);
  }

  renderedThumbNails = () => this.props.cards.map( (card, key) => {
      const url = card.img
      return (
        <Link to={`/cards/${card.id}`} >
          <div className={card.id} >
              <img src={url} key={card.id} />
          </div>
        </Link>
      )
    })
  

  render() {
     return (
      <div className="thumbNailContainer">
        { this.renderedThumbNails() }
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  cards: store.cards
})

export const mapDispatchToProps = (dispatch) => ({
  loadCards: cards => dispatch(loadCards(cards))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookThumbNail);