const expect = require('chai').expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  const card1 = new Card(2, 'What are my favorite animals?', 
    ['llamas', 'elephants', 'brown bears', 'owls'], 'llamas');

  const card2 = new Card(3, `What is Chelsea's favorite color?`, 
    ['red', 'silver', 'orange', 'aquamarine'], 'aquamarine');

  const card3 = new Card(4, `Where is Ian from?`, 
    ['Brunswick', 'Portland', 'Boston', 'Freeport'], 'Freeport');
  
  const cards = [card1, card2, card3];
  const deck = new Deck(cards);

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have a way to count cards', function() {
    expect(deck.cards.length).to.equal(deck.countCards())
  });

});