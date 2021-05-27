/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let amounts = {}
    let max = -Infinity
    for(num of nums){
        if(!amounts[num]){
            amounts[num] = 0;
        }
        amounts[num]++;
        max = Math.max(max, amounts[num])
    }
    
    let frequencies = {}
    for(key of Object.keys(amounts)){
        let amount = amounts[key];
        if(!frequencies[amount]){
            frequencies[amount] = []
        }
        for(let i=0; i<amount; i++){
            frequencies[amount].push(key)
        }
    }
    
    let output = []
    for(let i=0;i<=max;i++){
        if(frequencies[i]){
            output = output.concat(frequencies[i].sort((a,b)=>b-a))
        }
    }
    
    return output;
};