
class FrontMiddleBackQueue {
    constructor() {
        this.queue = []
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    if(this.queue.length){
        let mid = Math.floor(this.queue.length/2)
        this.queue = this.queue.splice(0,mid)
            .concat([val])
            .concat(this.queue.splice(mid-1))
    } else {
        this.queue.push(val)
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return this.queue.length ? this.queue.shift() : -1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.queue.length){
        if(this.queue.length === 2) {
            let midVal = this.queue[0]
            this.popFront()
            return midVal
        }
        
        let mid = Math.floor(this.queue.length/2)
        let midVal = this.queue[mid]
        this.queue = this.queue.splice(0,mid)
            .concat(this.queue.splice(mid))
        return midVal
    }
    return -1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return this.queue.length ? this.queue.pop() : -1
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */