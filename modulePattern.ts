abstract class AbModulePattern {
    abstract publicKey: number
    abstract publicMethod(): number
}

class ModulePattern extends AbModulePattern {
    private privateKey = 0
    private privateMethod() {
        return ++this.privateKey
    }

    public publicKey = this.privateKey
    public publicMethod() {
        return this.privateMethod()
    }
}

const modulePattern = new ModulePattern()

console.log(modulePattern.publicMethod()) // 1
console.log(modulePattern.publicMethod()) // 2
