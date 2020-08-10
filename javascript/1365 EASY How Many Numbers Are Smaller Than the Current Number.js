/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let dict = {};
    for(const num of nums){
        if(!dict[num]) dict[num]=0;
        dict[num]++;
    }

    const output=[];
    for(const num of nums){
        let val=0;
        for(const key of Object.keys(dict)){
            if(key<num) val+=dict[key]
        }
        output.push(val);
    }
    return output;
};
