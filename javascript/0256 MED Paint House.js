/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    for(let i=1; i<costs.length; i++){
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2])
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2])
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1])
    }
    
    let last = costs[costs.length-1]
    return Math.min(last[0], last[1], last[2])
};