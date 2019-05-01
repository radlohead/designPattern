abstract class AbAdapter {
    abstract vote(): void
}

class SenateSystem {
    adapter: AbAdapter | RufusAdapter
    constructor(adapter: CurrentAdapter | RufusAdapter) {
        this.adapter = adapter
    }
    public vote() {
        this.adapter.vote()
    }
}

class CurrentAdapter extends AbAdapter {
    vote() {
        console.log('현 황제를 지지합니다.')
    }
}
class RufusAdapter extends AbAdapter {
    vote() {
        console.log('루프스를 황제로 지지합니다.')
    }
}

const currentSenateSystem = new SenateSystem(new CurrentAdapter())
currentSenateSystem.vote()
const rufusSenateSystem = new SenateSystem(new RufusAdapter())
rufusSenateSystem.vote()
