class SenateSystem {
    constructor(adapter) {
        this.adapter = adapter
    }
    vote() {
        this.adapter.vote()
    }
}

class CurrentAdapter {
    vote() {
        console.log('현 황제를 지지합니다.')
    }
}
class RufusAdapter {
    vote() {
        console.log('루프스를 황제로 지지합니다.')
    }
}

const currentSenateSystem = new SenateSystem(new CurrentAdapter())
currentSenateSystem.vote()
const rufusSenateSystem = new SenateSystem(new RufusAdapter())
rufusSenateSystem.vote()
