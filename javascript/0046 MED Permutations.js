/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = [];
    backtrack(nums, output);
    return output;
};

var backtrack = function(nums, output, arr=[]){
    if(!nums.length){
        output.push(arr);
    }else{
        for(let i=0;i<nums.length;i++){
            let newNums = nums.slice(0,i).concat(nums.slice(i+1,nums.length));
            backtrack(newNums,output,arr.concat(nums.slice(i,i+1)));
        }
    }
}
