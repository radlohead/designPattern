class Strategy {
    constructor() {
        this.strategy = null
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }
    execute() {
        this.strategy.execute()
    }
}

class ShipStrategy {
    execute() {
        console.log('배로 이동합니다.')
    }
}

class LandStrategy {
    execute() {
        console.log('육지로 이동합니다.')
    }
}

const strategy = new Strategy()
strategy.setStrategy(new ShipStrategy())
strategy.execute()
strategy.setStrategy(new LandStrategy())
strategy.execute()
