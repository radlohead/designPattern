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
    public register(target: Mucianus) {
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
    public subscribe(target: Vespasianus) {
        this.list.push({
            target,
            point: 0
        })
        target.register(this)
    }
    public unsubscribe(target: Vespasianus) {
        this.list = this.list.filter(person => person.target !== target)
    }
    public fire(target: Vespasianus) {
        this.list.some(
            (person): boolean => {
                if (person.target === target) {
                    ++person.point
                    return true
                } else return false
            }
        )
    }
}

const vespasianus = new Vespasianus()
const mucianus = new Mucianus()

mucianus.subscribe(vespasianus)
console.log(mucianus.list)
vespasianus.publish()
console.log(mucianus.list)
