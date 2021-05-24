/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let result = 0;
    let curr = 1;
    while (n-curr >= 0) {
        n -= curr;
        curr++;
        result++;
    }

    return result;
};