/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = [];

    for(let i=0;i<nums.length;i+=2){
        let freq = nums[i], val = nums[i+1];
        output = output.concat(Array(freq).fill(val));
    }

    return output;
};
