import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const url = this.props.img

    return (
      <div className="Book">
        <p>I'm a Book!</p>
        <img src={url} />
        <p>{this.props.text}</p>
        <button>Record</button>
        <button>Submit</button>
      </div>
    );
  }
}

export default Book;