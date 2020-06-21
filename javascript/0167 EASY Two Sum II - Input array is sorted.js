/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var dict = {};

    for(var i=0; i<numbers.length; i++){
        let val = numbers[i]

        if(dict[target-val]!==undefined){
            return [dict[target-val]+1, i+1];
        }

        dict[val] = i;

    }

};
