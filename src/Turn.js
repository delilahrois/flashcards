const Card = require("./Card");

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = new Card();
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }
  
  evaluateGuess() {

  }

  giveFeedback() {
    
  }
}

module.exports = Turn;