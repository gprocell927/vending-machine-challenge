const Person = require('./person').default

export default class VendingMachine {
  constructor(credits=0, change=0, selection) {
    this.credits = credits
    this.selection = selection
    this.change = change
  }

  insertCredit(person, credit) {
    if (person.removeCredit(credit)) {
      this.credits += credit
    }
  }

  selectTreat(selection) {
    // inventory
    if (selection.price === this.credits) {
      this.selection = selection
      this.change = this.credits - selection.price
      this.credits -= selection.price
      return true
      vend(selection)
    } else if (selection.price < this.credits) {
      this.selection = selection
      this.change = this.credits - selection.price
      this.credits -= selection.price
      return true
      vend(selection)
    } else {
      console.log('Please deposit more money')
      return false
    }
  }

  giveChange(person, candy){
    person.credits += this.change
  }

  vend(person,candy) {
    // inventory
    person.selection = candy.name
    this.giveChange(person, candy)
    return candy

    // give change
  }

}
