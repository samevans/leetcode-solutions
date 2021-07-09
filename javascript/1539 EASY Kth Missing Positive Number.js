/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let set = new Set()
    for(let num of arr){
        set.add(num)
    }
    
    let curr = 0;
    while(k>0){
        curr++
        if(!set.has(curr)){
            k--
        }
    }
    return curr
};