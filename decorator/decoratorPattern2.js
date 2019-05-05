class Coffee {
    constructor() {
        this.price = 0
    }

    getPrice() {
        return this.price
    }
}
class Milk extends Coffee {
    constructor() {
        super()
        this.price = 5
    }
}
class CoffeePattern extends Coffee {
    constructor(props) {
        super()
        this.props = props
    }

    getPrice() {
        return this.props.getPrice()
    }
}
class MilkPattern extends Milk {
    constructor(props) {
        super(props)
    }

    getPrice() {
        return super.getPrice() + 10
    }
}

const coffeePattern = new CoffeePattern(new Coffee())
const milkPattern = new MilkPattern(new Milk())
coffeePattern.getPrice() // 0
milkPattern.getPrice() // 15
