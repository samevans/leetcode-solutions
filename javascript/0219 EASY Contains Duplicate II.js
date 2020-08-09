/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indexes = {};
    for(let i=0;i<nums.length;i++){
        let val = nums[i];
        if(!indexes[val]) indexes[val] = [];
        indexes[val].push(i);
    }

    for(const key of Object.keys(indexes)){
        let values = indexes[key];
        if(values.length>1){
            let pointer = 1;
            while(pointer<values.length){
                if(values[pointer]-values[pointer-1] <= k){
                    return true;
                }
                pointer++;
            }
        }
    }
    return false;
};
