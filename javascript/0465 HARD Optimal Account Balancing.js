/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    let debt = {}
    for(let [p1,p2,amount] of transactions){
        if(debt[p1]===undefined) debt[p1] = 0
        if(debt[p2]===undefined) debt[p2] = 0
        debt[p1]-=amount
        debt[p2]+=amount
    }
    
    // TODO: Implement backtracking
    
    let num = 0
    for(let key of Object.keys(debt)){
        if(debt[key]<0) num++
    }
    return num
};