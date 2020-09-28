import React from "react";
import Card from './Card'
import './list.css'

class List extends React.Component {
  render() {
      console.log("list props: ", this.props)
      const cards = this.props.cards.map(card=> <Card key={card.id} title={card.title} content={card.content}/>)
    return (
      <section className='List'>
        <header className='List-header'><h2>{this.props.header}</h2></header>
        <div className="List-cards">{cards}</div>
        <button type="button" className="List-add-button">
              + Add Random Card
            </button>
      </section>
    );
  }
}

export default List