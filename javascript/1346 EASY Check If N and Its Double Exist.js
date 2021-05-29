/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let doubles = new Set()
    for(num of arr){
        if(doubles.has(num)){
            return true
        }
        doubles.add(2*num)
        doubles.add(num/2)
    }
    return false
};