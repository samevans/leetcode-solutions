/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = []
    for(let i=0;i<position.length;i++){
        cars.push(new Car(position[i],speed[i],target))
    }
    cars.sort((a,b)=>b.position-a.position)
    
    let fleets = 0
    let prevArrival = -Infinity
    for(let car of cars){
        if(car.arrival>prevArrival){
            fleets++
            prevArrival = car.arrival
        }
    }
    return fleets
};

class Car{
    constructor(position, speed, target){
        this.position = position
        this.speed = speed
        this.arrival = (target-this.position)/this.speed
    }
}