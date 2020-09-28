import React from 'react';
import Card from './Card'
import List from './List'
import store from './STORE'
import './app.css'

class App extends React.Component{
  render(){
    
    const lists = this.props.store.lists.map((list)=> {
    const cards = list.cardIds.map((card)=>this.props.store.allCards[card]) 
     return <List key={list.id} header={list.header} cards={cards}/> 
      
    })
    return (
      <main className="App">
        <header className='App-header'>
          <h1>
          Trelloyes!
          </h1>
        </header>
        <div className='App-list'>
          {lists}
        </div>
      </main>
    )
  }
}
export default App