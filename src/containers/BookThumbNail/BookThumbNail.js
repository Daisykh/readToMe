import React, { Component } from 'react';
import mockData from '../../__mocks__/mockData';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/index';
// import Book from '../Book/Book';
import { Link } from 'react-router-dom';
import { apiPost } from '../../helper/apiCalls';
import './BookThumbNail.css'
const recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');


export class BookThumbNail extends Component {
  async componentDidMount() {
    const flashCards = mockData;
    const response = await apiPost();
    await console.log(response);
    await this.props.loadCards(flashCards);
  }

  renderedThumbNails = () => this.props.cards.map( (card, key) => {
      const url = card.img
      return (
        <div className="thumbContainer">
          <Link to={`/cards/${card.id}`} key={card.id} >
            <div className={card.id} id="thumb-nail" >
                <img src={url} key={card.id} alt="book thumb nail"/>
            </div>
          </Link>
        </div>
      )
    })
  

  render() {
     return (
      <div className="thumbNailsContainer">
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