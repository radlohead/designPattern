class RequestName {
    url: string
    method: string
    constructor() {
        this.url = ''
        this.method = ''
    }
}

class RequestMethod {
    request: RequestName
    constructor() {
        this.request = new RequestName()
    }

    setUrl(url: string) {
        this.request.url = url
        return this
    }

    setMethod(method: string) {
        this.request.method = method
        return this
    }

    info() {
        return this.request
    }
}

const log = console.log
const requestMethod = new RequestMethod()
    .setUrl('setting url')
    .setMethod('setting method')
log(requestMethod.info())
