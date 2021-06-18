/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hash = {}
    for(let num of nums){
        hash[num] = hash[num] + 1 || 1
    }
    let sum = 0
    for(let key of Object.keys(hash)) {
        sum += hash[key] === 1 ? parseInt(key) : 0
    }
    return sum
};