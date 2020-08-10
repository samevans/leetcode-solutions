/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    let numDict = {};

    for(const num of nums){
        if(!!numDict[num]){
            result+=numDict[num];
            numDict[num]++;
        }else{
            numDict[num]=1;
        }
    }

    return result;
};
