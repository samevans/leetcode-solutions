/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numDict = {};

    for(var i=0;i<nums.length;i++){

        const val = nums[i];

        if(numDict[target-val]!==undefined) {
            return [numDict[target-val],i]
        }

        numDict[val] = i;
    }
};
