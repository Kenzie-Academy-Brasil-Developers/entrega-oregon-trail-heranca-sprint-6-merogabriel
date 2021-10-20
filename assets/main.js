class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    get name () {
        return this._name
    }

    set name (name) {
        this._name = name
    }

    get food () {
        return this._food
    }

    set food (food) {
        this._food = food
    }

    get isHealthy () {
        return this._isHealthy
    }
    
    set isHealthy (isHealthy) {
        this._isHealthy = isHealthy
    }

    hunt(){
        this._food += 2
    }

    eat(){
        if (this._food > 0) {
            this._food -= 1
            this._isHealthy = true
        } else{
            this._isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity
        this._passengers = []
    }

    getAvailableSeatCount() {
        if (this._capacity > this._passengers.length) {
            return this._capacity - this._passengers.length
        } else {
            return 0
        }
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this._passengers.push(traveler)
        } 
    }

    shouldQuarantine() {
        for (let i = 0; i < this._passengers.length; i++){
            const current = this._passengers[i]
            if (!current.isHealthy) {
                return true
            }
        }
        return false
    }

    totalFood() {
        let total = 0
        for (let i = 0; i < this._passengers.length; i++){
            const current = this._passengers[i]
            total += current.food
        }
        return total
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this._food = 2
        this._isHealthy = true
    }

    hunt(){
        this._food += 5
    }

    eat(){
        if (this._food > 1) {
            this._food -= 2
            this._isHealthy = true
        } else if (this._food <= 1) {
            this._food = 0
            this._isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this._food >= numOfFoodUnits) {
            this._food -= numOfFoodUnits
            traveler._food += numOfFoodUnits
        }
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
        this._food = 1
        this._isHealthy = true
    }

    heal(traveler) {
        traveler._isHealthy = true
    }
}