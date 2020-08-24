/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = {
        0: 0,
        1: 0,
        2: 0
    }

    for(const num of nums){
        counts[num]++;
    }

    let i=0;
    for(const key of Object.keys(counts)){
        while(counts[key]>0){
            nums[i] = key;
            i++;
            counts[key]--;
        }
    }
};

// In place using constant space
var sortColors = function(nums) {
    let i = 1;

    while(i<nums.length){
        let j = i;
        while(j>=0 && nums[j]<nums[j-1]){
            [nums[j],nums[j-1]] = [nums[j-1],nums[j]];
            j--;
        }
        i++;
    }
};
