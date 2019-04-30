class Request {
    constructor() {
        this.url = ''
        this.method = ''
    }
}

class RequestMethod {
    constructor() {
        this.request = new Request()
    }

    setUrl(url) {
        this.request.url = url
        return this
    }

    setMethod(method) {
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
