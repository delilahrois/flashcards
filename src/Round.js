const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess, card) {
    this.turns++;
    let newTurn = new Turn(guess, card);
    if (guess !== newTurn.card.correctAnswer) {
      this.incorrectGuesses.push(newTurn.card.id);
      this.deck.cards.shift();
      return 'Incorrect!';
    } else {
      this.deck.cards.shift();
      return 'Correct!';
    }
  }

  calculatePercentCorrect() {
    const correctGuesses = (this.turns - this.incorrectGuesses.length) 
    / this.turns * 100;
    this.percentCorrect = correctGuesses;
    return correctGuesses;
  }

  endRound() {
    return `** Round over! ** You answered 
    ${this.percentCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;