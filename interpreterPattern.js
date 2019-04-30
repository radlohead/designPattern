class Sum {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    pattern() {
        return this.left.pattern() + this.right.pattern()
    }
}

class Min {
    constructor(left, right) {
        this.left = left
        this.right = right
    }

    pattern() {
        return this.left.pattern() - this.right.pattern()
    }
}

class Num {
    constructor(num) {
        this.num = num
    }

    pattern() {
        return this.num
    }
}

const log = console.log
const num10 = new Num(10)
const num20 = new Num(20)
const sum = new Sum(num10, num20)
const min = new Min(num10, num20)
log(sum.pattern())
log(min.pattern())
