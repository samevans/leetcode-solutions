/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numDict = {};
    let result = [];

    for(var i=0;i<nums.length;i++){

        let val = nums[i];

        if(numDict[target-val] !== undefined) {
            result.push(numDict[target-val]);
            result.push(i);
            break;
        }

        numDict[val] = i;

    }

    return result;
};
