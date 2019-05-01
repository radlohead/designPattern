class Adapter {
    constructor(level) {
        this.level = level
    }

    attackWithSaber() {
        return this.level * 100
    }
}

class AdapterPattern {
    constructor(adapter) {
        this.adapter = adapter
    }

    attack() {
        return this.adapter.attackWithSaber()
    }
}

const adapterPattern = new AdapterPattern(new Adapter(10))
const adapterPattern2 = new AdapterPattern(new Adapter(20))
adapterPattern.attack()
adapterPattern2.attack()
