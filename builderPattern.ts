class Pizza {
    dough: string
    constructor() {
        this.dough = ''
    }
    setDough(dough: string) {
        this.dough = dough
        console.log(this.dough)
    }
}

abstract class BuilderPizza extends Pizza {
    abstract buildDough(): void
}

class SpicyPizzaBuilder extends BuilderPizza {
    buildDough() {
        this.setDough('spicy pizza')
    }
}

class PeperoniPizzaBuilder extends BuilderPizza {
    buildDough() {
        this.setDough('peperoni pizza')
    }
}

const spicyPizza = new SpicyPizzaBuilder()
const peperoniPizza = new PeperoniPizzaBuilder()
spicyPizza.buildDough()
peperoniPizza.buildDough()
