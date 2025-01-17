class HoneyMakerBee extends Bee {
  constructor() {
    super()
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }

  eat() {
    return super.eat()
  }

  makeHoney() {
    return this.honeyPot += 1
  }

  giveHoney() {
    return this.honeyPot -= 1
  }
};