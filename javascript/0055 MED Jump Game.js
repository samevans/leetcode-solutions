/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const visited = {}
    let stack = [0];
    while(stack.length){
        let index = stack.pop()

        // Current value is at the end of array
        if(index===nums.length-1){
            return true;
        }

        visited[index] = 1;

        // Add each of the next indexes that can be jumped to
        // Check to make sure this index is possible
        for(i=1;i<=nums[index] && i+index<nums.length; i++){
            if(!visited[index+i]){
                stack.push(index+i)
            }
        }
    }
    return false;
};
