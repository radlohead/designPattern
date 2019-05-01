class Animal {
    constructor(name) {
        this.name = name
    }

    attack() {
        return '공격'
    }
}

class AnimalChild {
    constructor(animal) {
        this.animal = animal
    }
    attack() {
        return `${this.animal.name} ${this.animal.attack()}`
    }
}

const tiger = new AnimalChild(new Animal('Tiger'))
const bird = new AnimalChild(new Animal('Bird'))
tiger.attack() // Tiger 공격
bird.attack() // Bird 공격
