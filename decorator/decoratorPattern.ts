interface IEspress {
    cost: number
    milk?: number
    water?: number
}

class Espresso implements IEspress {
    cost: number
    constructor() {
        this.cost = 2500
    }
}

const milk = (coffee: IEspress) => {
    coffee.cost += 300
    coffee.milk = 500
    return coffee
}

const water = (coffee: IEspress) => {
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
