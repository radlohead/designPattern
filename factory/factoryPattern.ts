abstract class AbFactory {
    abstract create(name: string): void
}

class Factory extends AbFactory {
    name: string | undefined
    constructor(name?: string) {
        super()
        this.name = name
    }

    create(name: string) {
        return new Factory(name)
    }

    info() {
        console.log(`${this.name}이 생성되었습니다.`)
    }
}

const factory = new Factory()
const factory1 = factory.create('fac1')
const factory2 = factory.create('fac2')
factory1.info()
factory2.info()
