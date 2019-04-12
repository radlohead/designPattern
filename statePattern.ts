abstract class LaptopSetting {
    abstract powerPush(): void
}

class On extends LaptopSetting {
    powerPush() {
        console.log('power on')
    }
}

class Saving extends LaptopSetting {
    powerPush() {
        console.log('power saving')
    }
}

class Off extends LaptopSetting {
    powerPush() {
        console.log('power off')
    }
}

class Laptop {
    powerState: any
    constructor() {
        this.powerState = null
    }

    setPowerState(powerState: On | Saving | Off) {
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
