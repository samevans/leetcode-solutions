/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = []

    const nums1Dict = {}
    for(num of nums1){
        nums1Dict[num] = 1;
    }

    for(num of nums2){
        if(nums1Dict[num]){
            result.push(num)
            delete nums1Dict[num]
        }
    }

    return result;
};
