interface ILegionary {
    name: string
    hp: number
    att: number
}

class Legionary implements ILegionary {
    name: string
    hp: number
    att: number
    constructor(name: ILegionary['name']) {
        this.name = name
        this.hp = 50
        this.att = 5
    }

    public attack(target: ILegionary['name']) {
        console.log(`${this.name}가 ${target}를 공격합니다`)
    }
}

const soldier1 = new Legionary('Marcus')
const soldier2 = new Legionary('Tiberius')
const soldier3 = new Legionary('Zero')

soldier1.hp = 40
soldier1.hp // 40
soldier2.attack(soldier2.name) // Tiberius가 Tiberius를 공격합니다
soldier2.hp // 50
