const singleton = (() => {
    let instance: any = null
    let a = 'hello'
    const initiate = () => {
        return {
            a: a,
            b: () => {
                alert(a)
            }
        }
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = initiate()
            }
            return instance
        }
    }
})()

console.log(singleton) // { getInstance: [Function: getInstance] }
console.log(singleton.getInstance()) // { a: 'hello', b: [Function: b] }
