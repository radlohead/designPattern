class Espresso {
    constructor() {
        this.cost = 2500
    }
}

const milk = coffee => {
    coffee.cost += 300
    coffee.milk = 500
    return coffee
}

const water = coffee => {
    coffee.cost += 100
    coffee.water = 300
    return coffee
}

const espress = new Espresso()
const caferate = milk(new Espresso())
const americano = water(new Espresso())
console.log(espress)
console.log(caferate)
console.log(americano)
