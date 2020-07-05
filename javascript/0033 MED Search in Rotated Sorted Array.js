/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let start = 0;
    let end = nums.length - 1;

    while(start<=end){

        let mid = Math.floor((start+end)/2);

        if(target === nums[start]) return start;
        if(target === nums[mid]) return mid;
        if(target === nums[end]) return end;

        // Left path is sorted
        if(nums[mid]>nums[start]) {
            if(target>nums[start] && target<nums[mid]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        // Right path is sorted
        else if(nums[mid]<nums[end]) {
            if(target>nums[mid] && target<nums[end]){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
        else{
            return -1;
        }
    }

    return nums[start]===target ? start : -1;

};
