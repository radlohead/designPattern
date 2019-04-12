abstract class AbStrategy {
    abstract execute(): void
}

class Strategy {
    strategy: any
    constructor() {
        this.strategy = null
    }

    setStrategy(strategy: ShipStrategy | LandStrategy) {
        this.strategy = strategy
    }
    execute() {
        this.strategy.execute()
    }
}

class ShipStrategy extends AbStrategy {
    execute() {
        console.log('배로 이동합니다.')
    }
}

class LandStrategy extends AbStrategy {
    execute() {
        console.log('육지로 이동합니다.')
    }
}

const strategy = new Strategy()
strategy.setStrategy(new ShipStrategy())
strategy.execute()
strategy.setStrategy(new LandStrategy())
strategy.execute()
