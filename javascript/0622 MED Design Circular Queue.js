/**
 * @param {number} k
 */
class MyCircularQueue {
    constructor(k){
        this.size = k
        this.queue = []
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(!this.isFull()){
        this.queue.push(value)
        return true
    }
    return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(!this.isEmpty()){
        this.queue.shift()
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.queue.length){
        return this.queue[0]
    }
    return -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.queue.length){
        return this.queue[this.queue.length-1]
    }
    return -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.size
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */