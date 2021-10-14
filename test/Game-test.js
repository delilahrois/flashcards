const expect = require('chai').expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

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
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', function() {
    expect(round.currentRound).to.be.an.instanceOf(Round);
  });

});
