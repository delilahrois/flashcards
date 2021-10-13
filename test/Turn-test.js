const expect = require('chai').expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  let card1;
  let card2;
  let card3;
  let turn;

  beforeEach(function() {
    card1 = new Card(2, 'What are my favorite animals?', 
      ['llamas', 'elephants', 'brown bears', 'owls'], 'llamas');

    card2 = new Card(3, `What is Chelsea's favorite color?`, 
      ['red', 'silver', 'orange', 'aquamarine'], 'aquamarine');

    card3 = new Card(4, `Where is Ian from?`, 
      ['Brunswick', 'Portland', 'Boston', 'Freeport'], 'Freeport');

    turn = new Turn('elephants', card1);
  });


  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function () {
    expect(turn.guess).to.equal('elephants');
  });

  it('should store a card', function () {
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should have a method to return a guess', function () {
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should be able to return the guess', function () {
    expect(turn.returnGuess()).to.equal('elephants');
  });

  it('should be able to return the card', function () {
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should be able to evaluate the guess', function () {
    turn.card = card1;
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should say when the correct answer has been given', function () {
    
    let newTurn = new Turn('aquamarine', card2);

    expect(newTurn.giveFeedback()).to.equal('Correct!');
  });

  it('should say when the incorrect answer has been given', function () {

    let newTurn = new Turn('silver', card2)

    expect(newTurn.giveFeedback()).to.equal('Incorrect!');
  });

});
