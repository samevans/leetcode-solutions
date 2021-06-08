/**
 * @param {number} timeToLive
 */
class AuthenticationManager {
    constructor(timeToLive){
        this.ttl = timeToLive
        this.tokens = {}
    }
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.tokens[tokenId] = currentTime + this.ttl
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if (this.tokens[tokenId] && currentTime < this.tokens[tokenId]) {
        this.tokens[tokenId] = currentTime + this.ttl
    }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let count = 0
    for (key of Object.keys(this.tokens)) {
        if (this.tokens[key]>currentTime) {
            count++
        }
    }
    return count
};

/** 
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */