/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var possible = function(k){
        let time = 0
        for(let pile of piles){
            time += Math.ceil(pile/k)
        }
        return time <= h
    }
    
    let start = 1
    let end =  10**9
    
    while(start<end){
        let mid = Math.floor((start+end)/2)
        if(!possible(mid)){
            start = mid + 1
        }else{
            end = mid
        }
    }
    return start
};