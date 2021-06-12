/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
    constructor(size){
        this.queue = []
        this.size = size
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    if(this.queue.length > this.size){
        this.queue.shift()
    }
    
    let sum = 0
    for(let item of this.queue){
        sum+=item
    }
    return sum/this.queue.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */