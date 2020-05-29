/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    for(var i=0;i<nums.length;i++){
        var length = Math.log(nums[i]) * Math.LOG10E + 1 | 0;
        if (length % 2 === 0) {
            result++;
        }
    }
    return result;
};
