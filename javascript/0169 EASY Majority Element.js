/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    for(const num of nums){
        if(!counts[num]) counts[num]=1;
        else counts[num]++;

        if(counts[num]>(nums.length/2)){
            return num;
        }
    }
};
