/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let leftSum = 0
        let rightSum = 0
        
        let left = i-1;
        let right = i+1
        
        while(left>=0){
            leftSum+=nums[left]
            left--
        }
        while(right<nums.length){
            rightSum+=nums[right]
            right++
        }
        
        if(leftSum===rightSum){
            return i
        }
    }
    return -1
};