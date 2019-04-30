interface IRequestName {
    url: string
    method: string
}

class RequestName implements IRequestName {
    url: IRequestName['url']
    method: IRequestName['method']
    constructor() {
        this.url = ''
        this.method = ''
    }
}

interface IRequestMethod {
    request: RequestName
}

class RequestMethod implements IRequestMethod {
    request: IRequestMethod['request']
    constructor() {
        this.request = new RequestName()
    }

    setUrl(url: IRequestName['url']) {
        this.request.url = url
        return this
    }

    setMethod(method: IRequestName['method']) {
        this.request.method = method
        return this
    }

    info() {
        return this.request
    }
}

const requestMethod = new RequestMethod()
    .setUrl('setting url')
    .setMethod('setting method')
requestMethod.info()
