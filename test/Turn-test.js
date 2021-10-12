const expect = require('chai').expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function () {
    const turn = new Turn('white tigers');
    expect(turn.guess).to.equal('white tigers');
  });

  it('should store a card', function () {
    const turn = new Turn('white tigers')
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should have a method to return a guess', function () {
    const turn = new Turn('white tigers');
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should be able to return the guess', function () {
    const turn = new Turn('white tigers');
    expect(turn.returnGuess()).to.equal('white tigers');
  });

  it('should be able to return the card', function () {
    const turn = new Turn();
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should be able to evaluate the guess', function () {
    const turn = new Turn('white tigers');
    turn.card = new Card(1, 'What are my favorite animals?',
      ['giraffes', 'pandas', 'white tigers'], 'white tigers');
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should say when the correct answer has been given', function () {
    const turn = new Turn('white tigers');
    turn.card = new Card(1, 'What are my favorite animals?', 
      ['giraffes', 'pandas', 'white tigers'], 'white tigers');
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should say when the incorrect answer has been given', function () {
    const card = new Card(2, 'What are my favorite animals?', 
      ['llamas', 'elephants', 'brown bears', 'owls'], 'llamas');
    const turn = new Turn('owls', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

});
