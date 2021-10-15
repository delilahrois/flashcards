const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard());
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns++;
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctGuesses = (this.turns - this.incorrectGuesses.length) 
    / this.turns * 100;
    this.percentCorrect = correctGuesses;
    return correctGuesses;
  }

  endRound() {
    console.log(`** Round over! ** You answered 
    ${this.percentCorrect}% of the questions correctly!`);
  }
}

module.exports = Round;