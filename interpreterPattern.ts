interface IOperation {
    left:
        | {
              [pattern: string]: () => number
          }
        | Num
    right:
        | {
              [pattern: string]: () => number
          }
        | Num
    pattern(): number
}

class Sum implements IOperation {
    left: IOperation['left']
    right: IOperation['right']
    constructor(left: IOperation['left'], right: IOperation['right']) {
        this.left = left
        this.right = right
    }

    pattern() {
        return this.left.pattern() + this.right.pattern()
    }
}

class Min implements IOperation {
    left: IOperation['left']
    right: IOperation['right']
    constructor(left: IOperation['left'], right: IOperation['right']) {
        this.left = left
        this.right = right
    }

    pattern() {
        return this.left.pattern() - this.right.pattern()
    }
}

interface INum {
    num: number
}

class Num implements INum {
    num: number
    constructor(num: number) {
        this.num = num
    }

    pattern() {
        return this.num
    }
}

const num10 = new Num(10)
const num20 = new Num(20)
const sum = new Sum(num10, num20)
const min = new Min(num10, num20)
sum.pattern()
min.pattern()
