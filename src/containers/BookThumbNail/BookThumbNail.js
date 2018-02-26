import React, { Component } from 'react';
import mockData from '../../__mocks__/mockData';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/index';
import { Link, withRouter } from 'react-router-dom';
// import { apiPost } from '../../helper/apiCalls';
import './BookThumbNail.css';
// const recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');

export class BookThumbNail extends Component {

  componentDidMount() {
    const flashCards = mockData;
    // const response = await apiPost();
    // await console.log(response);
    this.props.loadCards(flashCards);
  }

  renderedThumbNails = () => this.props.cards.map( (card, index) => {
    const url = card.img;

    return (
      <div className="thumb" key={index}>
        <Link to={`/cards/${card.id}`} >
          <div className={card.id}>
            <img className="thumb__img" src={url}/>
          </div>
          <div className="thumb__details">
            <div className="thumb__title"></div>
          </div>
        </Link>
      </div>
    );
  })
  

  render() {
    return (
      <div className="row-container">
        <div className="row">
          <div className="row__inner parent">
            { this.renderedThumbNails() }
          </div>
        </div>
        <div className="row">
          <div className="row__inner parent">
            { this.renderedThumbNails() }
          </div>
        </div>
        <div className="row">
          <div className="row__inner parent">
            { this.renderedThumbNails() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  loadCards: cards => dispatch(loadCards(cards))
});

BookThumbNail.propTypes = {
  loadCards: PropTypes.string,
  cards: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookThumbNail));