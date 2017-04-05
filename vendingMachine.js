const Person = require('./person').default

export default class VendingMachine {
  constructor(credits=0, change=0, selection) {
    this.credits = credits
    this.selection = selection
    this.change = change
  }

  insertCredit(credit) {
    this.credits += credit
  }

}

export function payUp(vendingMachine, person, creditsGiven) {
  vendingMachine.insertCredit(creditsGiven)
  person.removeCredit(creditsGiven)
}
