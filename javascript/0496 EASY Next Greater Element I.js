/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let dict = {}
    for(let i=0; i<nums2.length; i++){
        if(!dict[nums2[i]]){
            dict[nums2[i]] = i;
        }
    }

    let output = []
    for(let num of nums1){
        let val = -1
        if(dict[num]!==undefined){
            let index = dict[num]
            for(let i=index;i<nums2.length;i++){
                if(nums2[i]>num){
                    val = nums2[i]
                    break;
                }
            }

        }
        output.push(val)
    }

    return output;
};
