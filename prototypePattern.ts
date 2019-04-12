class ProtoOriginal {
    name: string
    constructor(name) {
        this.name = name
    }
    go() {
        console.log(`${this.name} go`)
    }
}

const protoCopy = new ProtoOriginal('ProtoCopy')
const protoCopy2 = new ProtoOriginal('ProtoCopy2')
protoCopy.go()
protoCopy2.go()
