const modulePattern = (() => {
    let privateKey = 0
    const privateMethod = () => {
        return ++privateKey
    }

    return {
        publicKey: privateKey,
        publicMethod: () => {
            return privateMethod()
        }
    }
})()

console.log(modulePattern.publicMethod()) // 1
console.log(modulePattern.publicMethod()) // 2
