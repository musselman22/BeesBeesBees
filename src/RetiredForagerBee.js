class RetiredForagerBee extends ForagerBee {
  constructor() {
    super()
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'

  }

  eat() {
    return super.eat()
  }

  makeHoney() {
    return this.honeyPot += 1
  }

  forage() {
    return `I am too old, let me play cards instead`
  }

  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
};