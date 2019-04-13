class Pizza {
    setDough(dough) {
        this.dough = dough
        console.log(this.dough)
    }
}

class SpicyPizzaBuilder extends Pizza {
    buildDough() {
        this.setDough('spicy pizza')
    }
}

class PeperoniPizzaBuilder extends Pizza {
    buildDough() {
        this.setDough('peperoni pizza')
    }
}

const spicyPizza = new SpicyPizzaBuilder()
const peperoniPizza = new PeperoniPizzaBuilder()
spicyPizza.buildDough()
peperoniPizza.buildDough()
