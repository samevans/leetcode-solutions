
class UndergroundSystem {
    constructor(){
        this.times = {}
        this.checkIns = {}
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns[id] = [stationName, t]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(this.checkIns[id]) {
        let [checkInStationName, checkInT] = this.checkIns[id]
        
        let key = checkInStationName + "-" + stationName
        if(!this.times[key]) this.times[key] = []
        this.times[key].push(t-checkInT)
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = startStation + "-" + endStation
    let allTimes = this.times[key]
    return (allTimes.reduce((a, b) => a + b, 0))/allTimes.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */