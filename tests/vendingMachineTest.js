require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const Person = require('../person').default
const Treat = require('../treat').default
describe('Vending Machine', function() {

  it('should take money from the user', () => {

    const alex = new Person()
    const vendingMachine = new VendingMachine()

    // Alex inserts a dollar into the vending machine
    vendingMachine.insertCredit(alex, 100)

    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.change, 0)

    assert.equal(alex.credits, 400)
  });

  it('should let the user make a selection with enough credits', () => {

    const user = new Person()
    const vendingMachine = new VendingMachine()
    const candy = new Treat('Almond Joy', 75)

    vendingMachine.insertCredit(user, 75)
    assert.equal(vendingMachine.credits, 75)

    vendingMachine.selectTreat(candy)
    assert.equal(vendingMachine.selection, candy)
    assert.equal(vendingMachine.selection.name, 'Almond Joy')
    assert.equal(candy.price, 75)
  })

  it('shouldnt let the user make a selection with too few credits', () => {

    const user = new Person()
    const vendingMachine = new VendingMachine()
    const candy = new Treat('Almond Joy', 75)

    vendingMachine.insertCredit(user, 50)
    assert.equal(vendingMachine.selectTreat(candy), false)
    assert.equal(vendingMachine.selection, null)

  })

  it('should dispense the treat that the user has selected', () => {
    const user = new Person()
    const vendingMachine = new VendingMachine()
    const candy = new Treat('Almond Joy', 75)

    vendingMachine.insertCredit(user, 75)
    vendingMachine.selectTreat(candy)
    vendingMachine.vend(user,candy)

    assert.equal(candy.name, 'Almond Joy')
    assert.equal(user.selection, candy.name)
  })

  it('should give the user change if they insert more credits than what the treat costs', () => {
    const user = new Person()
    const vendingMachine = new VendingMachine()
    const candy = new Treat('Charleston Chew', 75)

    vendingMachine.insertCredit(user, 100)
    vendingMachine.selectTreat(candy,user)

    assert.equal(vendingMachine.change,25)
    vendingMachine.vend(user,candy)
    assert.equal(user.credits, 425)
  })

  context('insertCredit Function', () => {
    it('should add credit to the vending machine if the user has credits to give', () => {
      const user = new Person()
      const vendingMachine = new VendingMachine()

      vendingMachine.insertCredit(user, 300)
      assert.equal(vendingMachine.credits, 300)
    })
  })

  context('selectTreat Function', () => {
    it('should approve selection if the user has deposited sufficient credits', () => {
      const user = new Person()
      const vendingMachine = new VendingMachine()
      const candy = new Treat('Starbursts', 100)

      vendingMachine.insertCredit(user, 300)
      assert.equal(vendingMachine.credits, 300)

      vendingMachine.selectTreat(candy)
      assert.equal(vendingMachine.selection.name, 'Starbursts')
      assert.equal(candy.price, 100)
      assert.equal(vendingMachine.credits,200)
    })
  })


  // assertions to come :
    // Treat qty/selection  : mapping?
});
