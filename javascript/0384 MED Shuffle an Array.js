/**
 * @param {number[]} nums
 */
class Solution {
    constructor(nums){
        this.nums = nums
        this.original = nums.slice()
    }
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    this.nums.sort((a,b)=> Math.random() < 0.5 ? 1 : -1)
    return this.nums
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */