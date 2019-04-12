interface IVespasianus {
    subscriber: {
        fire(key: Vespasianus): void
    }
    subscribers: Mucianus[]
}

class Vespasianus {
    subscribers: IVespasianus['subscribers']
    constructor() {
        this.subscribers = []
    }
    public publish() {
        this.subscribers.every((subscriber: IVespasianus['subscriber']) => {
            subscriber.fire(this)
            return true
        })
    }
    public register(target) {
        this.subscribers.push(target)
        console.log(this.subscribers)
    }
}

interface IMucianus {
    list: {
        target: Vespasianus
        point: number
    }[]
}

class Mucianus {
    list: IMucianus['list']
    constructor() {
        this.list = []
    }
    public subscribe(target) {
        this.list.push({
            target,
            point: 0
        })
        target.register(this)
    }
    public unsubscribe(target) {
        this.list = this.list.filter(person => person.target !== target)
    }
    public fire(target) {
        this.list.some(person => {
            if (person.target === target) {
                ++person.point
                return true
            }
        })
    }
}

const vespasianus = new Vespasianus()
const mucianus = new Mucianus()

mucianus.subscribe(vespasianus)
console.log(mucianus.list)
vespasianus.publish()
console.log(mucianus.list)
