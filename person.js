export default class Person {
  constructor(name, credits, selection) {
    // each person starts out with 5 dollars
    this.name = name
    this.credits = 500
    this.selection = selection
  }
  removeCredit(credit) {
    if (this.credits >= credit) {
      this.credits -= credit
      return true
    }
  }
}
