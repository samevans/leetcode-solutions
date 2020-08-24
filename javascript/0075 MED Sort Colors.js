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
