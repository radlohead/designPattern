type messageType = {
    msg: string
}

const message = (msg: messageType['msg']) => {
    console.log(`message: ${msg}`)
}

interface ILight {
    context: string | undefined
}

class Light implements ILight {
    context: ILight['context']
    constructor(props: ILight['context']) {
        this.context = props
    }
    public on() {
        message(`${this.context} on`)
    }
    public off() {
        message(`${this.context} off`)
    }
}

class RoomOnCommand extends Light {
    constructor(props?: ILight['context']) {
        super(props)
        this.context = 'Room'
    }

    private execute() {
        this.on()
    }
    private undo() {
        this.off()
    }
}

class RoomOffCommand extends Light {
    constructor(props?: ILight['context']) {
        super(props)
        this.context = 'Room'
    }

    private execute() {
        this.on()
    }
    private undo() {
        this.off()
    }
}

class MusicOnCommand extends Light {
    constructor(props?: ILight['context']) {
        super(props)
        this.context = 'Music'
    }
    private execute() {
        this.on()
    }
    private undo() {
        this.off()
    }
}

class MusicOffCommand extends Light {
    constructor(props?: ILight['context']) {
        super(props)
        this.context = 'Music'
    }
    private execute() {
        this.on()
    }
    private undo() {
        this.off()
    }
}

type IRemoteControl = {
    execute(): void
    undo(): void
}

class RemoteControl {
    private obj: IRemoteControl
    private undo: IRemoteControl

    public setCommand(obj: any) {
        this.obj = obj
    }
    public on() {
        this.obj.execute()
        this.undo = this.obj
    }
    public off() {
        this.obj.undo()
    }
}

const roomOn = new RoomOnCommand()
const roomOff = new RoomOffCommand()
const musicOn = new MusicOnCommand()
const musicOff = new MusicOffCommand()
const remoteControl = new RemoteControl()

remoteControl.setCommand(roomOn)
remoteControl.on()
remoteControl.off()

remoteControl.setCommand(roomOff)
remoteControl.on()
remoteControl.off()

remoteControl.setCommand(musicOn)
remoteControl.on()
remoteControl.off()

remoteControl.setCommand(musicOff)
remoteControl.on()
remoteControl.off()
