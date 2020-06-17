/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let start = 0;
    let end = nums.length -1;
    let mid1 = -1;
    let mid2 = -1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(target < nums[mid]){
            end = mid-1;
        }
        else if(target > nums[mid]){
            start = mid+1
        }else{
            mid1=mid;
            mid2=mid;

            while(nums[mid1-1]===target) mid1--;
            while(nums[mid2+1]===target) mid2++;

            break;
        }
    }

    return [mid1,mid2];

};
