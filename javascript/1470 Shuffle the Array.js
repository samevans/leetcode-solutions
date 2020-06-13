/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const answer = [];
    let mid = nums.length / 2

    for (var i=0;i<mid;i++){
        answer.push(nums[i])
        answer.push(nums[mid+i])
    }

    return answer;
};
