class On {
    powerPush() {
        console.log('power on')
    }
}

class Saving {
    powerPush() {
        console.log('power saving')
    }
}

class Off {
    powerPush() {
        console.log('power off')
    }
}

class Laptop {
    constructor() {
        this.powerState = null
    }

    setPowerState(powerState) {
        this.powerState = powerState
    }
    powerPush() {
        this.powerState.powerPush()
    }
}

const laptop = new Laptop()
laptop.setPowerState(new On())
laptop.powerPush()
laptop.setPowerState(new Saving())
laptop.powerPush()
laptop.setPowerState(new Off())
laptop.powerPush()
