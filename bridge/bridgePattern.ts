interface IBugger {
    name: string
}

abstract class AbBugger {
    abstract setBuggerName(name: string): void
    abstract getBuggerName(): void
}

class Bugger1 extends AbBugger implements IBugger {
    name: string
    constructor() {
        super()
        this.name = ''
    }

    public setBuggerName(name: string) {
        this.name = name
    }
    public getBuggerName() {
        console.log(this.name)
    }
}

class Bugger2 extends AbBugger implements IBugger {
    name: string
    constructor() {
        super()
        this.name = ''
    }

    public setBuggerName(name: string) {
        this.name = name
    }
    public getBuggerName() {
        console.log(this.name)
    }
}

const bugger1 = new Bugger1()
const bugger2 = new Bugger2()
bugger1.setBuggerName('새우버거')
bugger1.getBuggerName()
bugger2.setBuggerName('불고기버거')
bugger2.getBuggerName()
