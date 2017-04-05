const Person = require('./person.js')

export default class VendingMachine {
  constructor(status, credits, change, selection) {
    this.status = status
    this.credits = credits
    this.selection = selection
    // status can be ["idle", "credited", "vending"]
    // this.state = {
    //   status: "idle",
    //   credits: 0,
    //   change: 0,
    //   selection: null
    // }
  }

  // reset() {
  //   this.constructor()
  // }

}

export function insertCredit(vendingMachine, person, creditsGiven) {
  const { credits, selection } = vendingMachine
  return {
    vendingMachine: new VendingMachine("credited", credits + creditsGiven, 0, selection),
    person: new Person(person.name, person.credits - creditsGiven)
  }
}
