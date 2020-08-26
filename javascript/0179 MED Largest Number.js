/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    nums.sort((a,b)=>(""+b+a).localeCompare(""+a+b));
    let output = [];

    let zeroes = true;
    for(const num of nums){
        if(num!==0) zeroes = false;
        output.push(""+num);
    }

    if(zeroes){
        return "0"
    }

    return output.join("");
};
