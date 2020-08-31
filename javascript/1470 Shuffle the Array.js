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



/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let mid = Math.floor(nums.length/2)

    let x = nums.slice(0,mid);
    let y = nums.slice(mid,nums.length);

    let output = [];

    for(let i=0;i<n;i++){
        output.push(x[i])
        output.push(y[i])
    }

    return output;

};
