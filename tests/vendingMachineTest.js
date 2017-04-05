require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const { insertCredit } = require('../vendingMachine')
const Person = require('../person').default

describe('Vending Machine', function() {

  it('should take money from the user', () => {

    const alex = new Person()
    const vendingMachine = new VendingMachine()

    // Alex inserts a dollar into the vending machine
    const result = insertCredit(vendingMachine, alex, 100)

    // Assert the current status of the vendingMachine is 'credited' after credits inserted
    assert.equal(result.vendingMachine.status, 'credited')
    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(result.vendingMachine.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(result.vendingMachine.change, 0)
  });

});
