/**
 * @param {number} n
 */
class OrderedStream {
    constructor(n){
        this.map = {}
        this.n = n
        this.lowest = 1
    }
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.map[idKey] = value
    
    let result = []
    if(idKey === this.lowest){
        for(let i=idKey;i<=this.n;i++){
            if(this.map[i]){
                result.push(this.map[i])
                this.lowest++
            }else{
                break;
            }
        }
    }
    return result
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */