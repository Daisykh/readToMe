import React, { Component } from 'react';
import mockData from '../../__mocks__/mockData';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/index';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';
import { apiPost } from '../../helper/apiCalls';
import './BookThumbNail.css'
// const recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');


export class BookThumbNail extends Component {
  async componentDidMount() {
    const flashCards = mockData;
    const response = await apiPost();
    await console.log(response);
    await this.props.loadCards(flashCards);
  }

  renderedThumbNails = () => this.props.cards.map( (card) => {
      const url = card.img
      return (
        
          <Link to={`/cards/${card.id}`} >
            <div className="thumb">
              <div className={card.id}>
                  <img className="thumb__img" src={url}/>
              </div>
              <div className="thumb__details">
                <div className="thumb__title">Book Name</div>
              </div>
            </div>
          </Link>
 
      )
    })
  

  render() {
     return (
      <div>
        <div className="row">
          <div className="row__inner parent">
          { this.renderedThumbNails() }
          </div>
        </div>
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