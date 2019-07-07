// render different images (of your choice) to the screen.
//  Each image should listen for click events.
//The application should keep track of the user's score. 
//The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
//Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
//Once the user's score is reset after an incorrect guess, the game should restart.
// import files
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Modal from './components/Modal/Modal.js';
import ClickCard from './components/CardClicked/CardClicked';
import Footer from './components/Footer/Footer.js';
import cards from './cards.json';

import './index.css';

//create app with the object state for each propery
class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      clickedCards: [],
      footerText: ""
    }
//get each card by id
  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName('body');
//if the card is clicked setState update score to 0 and emptys array
    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})
//handles shakeWrapper when the user picks the image more than once
      pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'You picked that already! Now you start Over.'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)
//else save clicked card to array and update, adding to the score
    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      //if the score is equal to 11 update state, set score back to zero, empty array, import cards
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, clickedCards: [], cards: cards})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }
//Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }
//renders the cards that have been clicked
  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }

//rendering the navbar and modal passing in the necessary properties
  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Modal />
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
        <Footer text={this.state.footerText}/>
      </div>
    );
  }
}
//eport class app
export default App;