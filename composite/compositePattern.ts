class Century {
    leader: string
    constructor(leader: string) {
        this.leader = leader
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        return 80
    }
}

type getNumberType = {
    getNumber: Function
}

class Cohort {
    leader: string
    centuries: []
    constructor(leader: string) {
        this.leader = leader
        this.centuries = []
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        this.centuries = this.centuries
            .map((century: getNumberType) => century.getNumber())
            .reduce((p, c) => p + c)
        return this.centuries
    }
    addCentury(century: Century) {
        this.centuries.push(century as never)
        return this
    }
}

type centuriesType = {
    centuries: number
}

class Leader {
    leader: string
    cohorts: []
    constructor(leader: string) {
        this.leader = leader
        this.cohorts = []
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        const getNumber = this.cohorts
            .map((cohort: centuriesType) => cohort.centuries)
            .reduce((p, c) => p + c)
        return getNumber
    }
    addCohort(cohort: Cohort) {
        this.cohorts.push(cohort as never)
        return this
    }
}

const century1 = new Century('AA')
const century2 = new Century('BB')
const century3 = new Century('CC')
const century4 = new Century('DD')
const cohort1 = new Cohort('COHORT1')
const cohort2 = new Cohort('COHORT2')
const leader1 = new Leader('Leader1')

cohort1.addCentury(century1).addCentury(century3)
cohort2.addCentury(century4)
cohort1.addCentury(century2)
console.log(cohort1.getNumber()) // 240
console.log(cohort1.getLeader()) // COHORT1
console.log(cohort2.getNumber()) // 80

leader1.addCohort(cohort1)
console.log(leader1.getLeader()) // Leader1
console.log(leader1.getNumber()) // 240
