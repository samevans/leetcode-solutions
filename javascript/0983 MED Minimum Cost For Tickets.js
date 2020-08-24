/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let total = Array(366);
    let ptr = 0;
    total[0] = 0;

    for(let i = 1; i < 366; i++){
        let currCost = total[i - 1];

        if(days[ptr] == i){
            currCost += costs[0];
            ptr++;
        }
        currCost = Math.min(currCost,total[Math.max(0,i - 7)] + costs[1]);
        currCost = Math.min(currCost,total[Math.max(0, i - 30)] + costs[2]);

        total[i] = currCost;
    }

    return total[366 - 1];

};
