interface IAdapter {
    level: number
}

class Adapter implements IAdapter {
    level: IAdapter['level']
    constructor(level: IAdapter['level']) {
        this.level = level
    }

    attackWithSaber() {
        return this.level * 100
    }
}

interface IAdapterPattern {
    adapter: Adapter
}

class AdapterPattern implements IAdapterPattern {
    adapter: IAdapterPattern['adapter']
    constructor(adapter: IAdapterPattern['adapter']) {
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
