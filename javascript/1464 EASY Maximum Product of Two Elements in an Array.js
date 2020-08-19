/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let largest = -Infinity, secondLargest = -Infinity;

    for(const num of nums){
        if(num>largest){
            secondLargest = largest;
            largest = num;
        }
        else if(num>secondLargest){
            secondLargest = num
        }
    }
    return (largest-1)*(secondLargest-1);
};
