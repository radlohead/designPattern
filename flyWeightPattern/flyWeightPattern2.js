class Color {
    constructor(name) {
        this.name = name
    }
}

class ColorCreator {
    constructor() {
        this.colors = {}
    }
    create(name) {
        let color = this.colors[name]
        if (color) return color
        this.colors[name] = new Color(name)
        return this.colors[name]
    }
}

const colorCreator = new ColorCreator()
colorCreator.create('color1')
colorCreator.create('color2')
