const expect = require('chai').expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let firstCard;
  let round;

  beforeEach(function() {
    card1 = new Card(2, 'What are my favorite animals?', 
      ['llamas', 'elephants', 'brown bears', 'owls'], 'llamas');

    card2 = new Card(3, `What is Chelsea's favorite color?`, 
      ['red', 'silver', 'orange', 'aquamarine'], 'aquamarine');

    card3 = new Card(4, `Where is Ian from?`, 
      ['Brunswick', 'Portland', 'Boston', 'Freeport'], 'Freeport');

    cards = [card1, card2, card3];
    deck = new Deck(cards);
    firstCard = deck[0];
    round = new Round(deck);
  });


  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should let us know the first card in the deck', function() {

    expect(round.returnCurrentCard()).to.equal(firstCard);
  });

  it('should have a method to update turns count', function() {

    expect(round.turns).to.equal(0);

    round.takeTurn('brown bears', card1);
    round.takeTurn('orange', card2);

    expect(round.turns).to.equal(2);
  });

  it('should store incorrect guesses', function() {

    round.takeTurn('elephants', card1);

    expect(round.incorrectGuesses[0]).to.equal(2);
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should be able to calculate percentage of correct guesses', function() {

    round.takeTurn('brown bears', card1);
    round.takeTurn('aquamarine', card2);
    round.takeTurn('Boston', card3);
    round.takeTurn('llamas', card1)

    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});