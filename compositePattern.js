class Century {
    constructor(leader) {
        this.leader = leader
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        return 80
    }
}
class Cohort {
    constructor(leader) {
        this.leader = leader
        this.centuries = []
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        this.centuries = this.centuries
            .map(century => century.getNumber())
            .reduce((p, c) => p + c)
        return this.centuries
    }
    addCentury(century) {
        this.centuries.push(century)
        return this
    }
}
class Leader {
    constructor(leader) {
        this.leader = leader
        this.cohorts = []
    }
    getLeader() {
        return this.leader
    }
    getNumber() {
        this.cohorts = this.cohorts
            .map(cohort => cohort.centuries)
            .reduce((p, c) => p + c)
        return this.cohorts
    }
    addCohort(cohort) {
        this.cohorts.push(cohort)
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
