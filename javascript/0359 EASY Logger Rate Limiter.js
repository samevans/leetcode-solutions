/**
 * Initialize your data structure here.
 */
class Logger {
    constructor(){
        this.messages = {}
    }
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.messages[message] && timestamp < this.messages[message]){
        return false
    }else{
        this.messages[message] = timestamp + 10
        return true
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */