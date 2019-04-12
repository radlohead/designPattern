const r = msg => {
    console.log('context: ', msg)
}

class Light {
    on() {
        r('light on')
    }

    off() {
        r('light off')
    }
}

class LightOnCommand {
    constructor(receiver_obj) {
        this.receiver_obj = receiver_obj
    }

    execute() {
        this.receiver_obj.on()
    }
    undo() {
        this.receiver_obj.off()
    }
}

class LightOffCommand {
    constructor(receiver_obj) {
        this.receiver_obj = receiver_obj
    }

    execute() {
        this.receiver_obj.off()
    }
    undo() {
        this.receiver_obj.on()
    }
}

class RemoteControl {
    setCommand(cmd) {
        this.obj = cmd
    }
    on() {
        this.obj.execute()
        this.undocommand = this.obj
    }
    off() {
        this.undocommand.undo()
    }
}

class LightAction {
    constructor() {
        this.light = new Light()
        this.lightOn = new LightOnCommand(this.light)
        this.lightOff = new LightOffCommand(this.light)
        this.remoteControl = new RemoteControl()
    }

    render() {
        this.remoteControl.setCommand(this.lightOn)
        this.remoteControl.on()
        this.remoteControl.off()

        this.remoteControl.setCommand(this.lightOff)
        this.remoteControl.on()
        this.remoteControl.off()
    }
}

const lightAction = new LightAction()
lightAction.render()
