class Composite {
    getPrice() {
        return this.price
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
}
class CompositePattern extends Composite {
    constructor() {
        super()
        this.compositeList = []
    }
    add(list) {
        this.compositeList.push(list)
    }
    getTotalPrice() {
        return this.compositeList.map(v => v.price).reduce((p, c) => p + c)
    }
}
class A extends Composite {
    constructor() {
        super()
        this.setName = 'name is A'
        this.price = 500
    }
}
class B extends Composite {
    constructor() {
        super()
        this.setName = 'name is B'
        this.price = 700
    }
}

const compositePattern = new CompositePattern()
compositePattern.add(new A())
compositePattern.add(new B())
compositePattern.getTotalPrice() // 1200
