class Car {
    drive() {
        return 'driving'
    }
}

class CarPattern {
    constructor(driver) {
        this.driver = driver
    }

    drive() {
        return this.driver.age < 18 ? 'too young' : new Car().drive()
    }
}

class Driver {
    constructor(age) {
        this.age = age
    }
}

const carPatternYoung = new CarPattern(new Driver(10))
const carPatternOld = new CarPattern(new Driver(10))
carPatternYoung.drive()
carPatternOld.drive()
