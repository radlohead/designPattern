class Coffee {
    constructor() {
        this.water = new Water()
        this.milk = new Milk()
        this.sugar = new Sugar()
    }

    volume(ml) {
        let result = 0
        result += this.water.volume(ml)
        result += this.milk.volume(ml)
        result += this.sugar.volume(ml)

        return result
    }
}

class Water {
    volume(ml) {
        return ml * 1.5
    }
}

class Milk {
    volume(ml) {
        return ml * 2
    }
}

class Sugar {
    volume(ml) {
        return ml * 3
    }
}

const coffee = new Coffee()
coffee.water.volume(1) // 1.5
coffee.milk.volume(1) // 2
coffee.sugar.volume(1) // 3
coffee.volume(1) // 6.5
