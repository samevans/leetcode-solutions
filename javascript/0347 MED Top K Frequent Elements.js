/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = {}
    for(let num of nums){
        frequency[num] = frequency[num] + 1 || 1
    }
    
    let keys = Object.keys(frequency).sort((a,b)=>frequency[b]-frequency[a])
    
    let result = []
    for(let i=0; i < k; i++){
        result.push(keys.shift())
    }
    return result
};
