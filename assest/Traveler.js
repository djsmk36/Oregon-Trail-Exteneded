class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        return this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            return this.isHealthy = false
        } else {
            return this.food -= 1
        }
    }
}

class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super (name, food, isHealthy)
       this.name = name
   }

   heal(traveler) {
       return traveler.isHealthy = true 
   }

}

class Hunter extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
        this.name = name
        this.food = 2
    }
    hunt() {
        this.food += 5
        }
   eat() {
    if(this.food <= 1){
        this.food -= this.food  
        return this.isHealthy = false
}
       this.food -= 2
   }
    giveFood(traveler, numOfFood) {
        
            if(this.food >= numOfFood) { 
                this.food -= numOfFood 
                traveler.food += numOfFood
            }
        }
    }