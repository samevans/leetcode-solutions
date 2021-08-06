/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0
    let sum = 0
    
    let sums = {}
    sums[0] = 1
    
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        
        if(sums[sum-k] !== undefined){
            result += sums[sum-k]
        }
        
        sums[sum] = sums[sum] + 1 || 1
    }
    return result
};