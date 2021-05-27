/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set();
    for (jewel of jewels) {
        jewelSet.add(jewel);
    }
    
    let numStones = 0;
    for (stone of stones) {
        if (jewelSet.has(stone)) {
           numStones++; 
        }
    }
    
    return numStones;
};