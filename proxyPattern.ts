class Car {
    drive() {
        return 'driving'
    }
}

interface ICarPattern {
    driver: Driver
}

class CarPattern implements ICarPattern {
    driver: ICarPattern['driver']
    constructor(driver: ICarPattern['driver']) {
        this.driver = driver
    }

    drive() {
        return this.driver.age < 18 ? 'too young' : new Car().drive()
    }
}

class Driver {
    age: number
    constructor(age: number) {
        this.age = age
    }
}

const carPatternYoung = new CarPattern(new Driver(10))
const carPatternOld = new CarPattern(new Driver(20))
carPatternYoung.drive()
carPatternOld.drive()
