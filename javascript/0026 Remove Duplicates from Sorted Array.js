/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numDict = {};

    for(var i=0;i<nums.length;i++){

        while(numDict[nums[i]]) {
            nums.splice(i,1);
        }
        numDict[nums[i]] = [];
    }

};
