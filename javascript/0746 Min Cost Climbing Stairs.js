/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    let result = Array(cost.length).fill(Infinity)
    result[0] = cost[0];
    result[1] = cost[1];
    
    for(let i=2; i<cost.length; i++) {
        result[i] = Math.min(result[i-1]+cost[i], result[i-2]+cost[i]) 
    }
    
    return Math.min(result[result.length-1], result[result.length-2])
    
};