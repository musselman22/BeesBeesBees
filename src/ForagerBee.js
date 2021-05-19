class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true
    this.treasureChest = []
  }

  eat() {
    return super.eat()
  }

  forage(treasure) {
    return this.treasureChest.push(treasure)

  }
};