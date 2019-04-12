const r = msg => {
    return () => {
        console.log('light context: ', msg)
    }
}

class Light {
    constructor() {
        ;(this.on = r('on')), (this.off = r('off'))
    }
}

class lightOnCommand {
    constructor(receiver_obj) {
        this.execute = () => {
            receiver_obj.on()
        }
        this.undo = () => {
            receiver_obj.off()
        }
    }
}

class lightOffCommand {
    constructor(receiver_obj) {
        this.execute = () => {
            receiver_obj.off()
        }
        this.undo = () => {
            receiver_obj.on()
        }
    }
}

class RemoteControl {
    setCommand(cmd) {
        this.obj = cmd
    }
    press() {
        this.obj.execute()
        this.undocommand = this.obj
    }
    undo() {
        this.undocommand.undo()
    }
}

class LightAction {
    constructor() {
        this.light = new Light()
        this.lightOn = new lightOnCommand(this.light)
        this.lightOff = new lightOffCommand(this.light)
        this.remoteControl = new RemoteControl()
    }

    render() {
        this.remoteControl.setCommand(this.lightOn)
        this.remoteControl.press()
        this.remoteControl.undo()

        this.remoteControl.setCommand(this.lightOff)
        this.remoteControl.press()
        this.remoteControl.undo()
    }
}

const lightAction = new LightAction()
lightAction.render()
