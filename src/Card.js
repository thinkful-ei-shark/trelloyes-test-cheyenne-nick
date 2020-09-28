import React from "react";
import './card.css';

class Card extends React.Component {
  render() {
      console.log("props of card:", this.props)
      return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{this.props.title}</h3>
      <p>{this.props.content}</p>
    </div>);
  }
}

export default Card