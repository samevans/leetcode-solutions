/**
 * @param {string} homepage
 */
class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage]
        this.curr = 0
    }
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history = this.history.splice(this.curr)
    this.curr = 0;
    this.history.unshift(url)
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.curr += steps
    if(this.curr > this.history.length-1){
        this.curr = this.history.length-1
    }
    return this.history[this.curr]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.curr -= steps
    if(this.curr < 0){
        this.curr = 0
    }
    return this.history[this.curr]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */