const expect = require('chai').expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
  expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('white tigers');
    expect(turn.guess).to.equal('white tigers');
  });

  it('should store a card', function() {
    const turn = new Turn('white tigers')
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should have a method to return a guess', function() {
    const turn = new Turn('white tigers');
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should return the guess', function() {
    const turn = new Turn('white tigers');
    expect(turn.returnGuess).to.equal(turn.guess);
  })

});
