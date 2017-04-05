require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const { payUp } = require('../vendingMachine')
const Person = require('../person').default

describe('Vending Machine', function() {

  it('should take money from the user', () => {

    const alex = new Person()
    const vendingMachine = new VendingMachine()

    // Alex inserts a dollar into the vending machine
    payUp(vendingMachine, alex, 100)

    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.change, 0)

    assert.equal(alex.credits, 400)

  });

});
