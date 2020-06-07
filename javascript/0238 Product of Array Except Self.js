/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = Array(nums.length);

    let productsLeftOfMe = 1;
    for(let i = 0; i < nums.length; i++){
        output[i] = productsLeftOfMe;
        productsLeftOfMe *= nums[i];
    }

    let productsRightOfMe = 1;
    for(let i = nums.length-1; i >= 0; i--){
        output[i] *= productsRightOfMe;
        productsRightOfMe *= nums[i];
    }
    return output;
};
