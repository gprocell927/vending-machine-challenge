const Person = require('./person').default

export default class VendingMachine {
  constructor(credits=0, change=0, selection) {
    this.credits = credits
    this.selection = selection
    this.change = change
    this.treats = {
      'Starbursts':{
        units: 12
      },
      'Almond Joy':{
        units: 10
      },
      'Pretzels':{
        units: 1
      },
      'Kit Kat':{
        units: 0
      }
    }
    // this.change = change
  }

  insertCredit(person, credit) {
    if (person.removeCredit(credit)) {
      this.credits += credit
    }
    // this.selectTreat(person)
    console.log(`Credits inserted: ${credit}`);
  }

  selectTreat(person, selection) {
    // inventory
    if (selection.price <= this.credits) {
      // this.selection = selection
      console.log(`You have selected ${selection.name}`)
      this.change = this.credits - selection.price
      console.log(`Balance due: ${change} credits`);
      this.credits = 0
      user.credits += this.change
      console.log((`Change dispensed: ${change} credits`));
      return true
      vend(person)
    } else {
      console.log('Please deposit more money')
      return false
    }
  }

  vend(person) {
    // inventory
    person.credits += this.change
    person.selection = this.selection.name
  }

}
