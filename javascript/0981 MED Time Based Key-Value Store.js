/**
 * Initialize your data structure here.
 */
class TimeMap {
    constructor(){
        this.times = {}
    }
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.times[key]) this.times[key] = {}
    this.times[key][timestamp] = value
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(this.times[key]){
        while(timestamp>=1){
            if(this.times[key][timestamp]){
                return this.times[key][timestamp]
            }
            timestamp--
        }
    }
    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */