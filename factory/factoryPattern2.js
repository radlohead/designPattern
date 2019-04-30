class FactoryCar {
    constructor(name) {
        ;(this.name = name), (this.info = null)
    }

    creator(name) {
        this.info =
            name === 'small' ? new FactorySmallCar() : new FactoryMiddleCar()
    }
}

class FactorySmallCar {
    info() {
        return 'small car'
    }
}

class FactoryMiddleCar {
    info() {
        return 'middle car'
    }
}

const factoryCar1 = new FactoryCar('car1')
const factoryCar2 = new FactoryCar('car2')
factoryCar1.creator('small')
factoryCar2.creator('middle')
