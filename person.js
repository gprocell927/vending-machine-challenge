export default class Person {
  constructor(name, credits) {
    // each person starts out with 5 dollars
    this.name = name
    this.credits = 500
  }
  removeCredit(credit) {
    this.credits -= credit
  }
}
