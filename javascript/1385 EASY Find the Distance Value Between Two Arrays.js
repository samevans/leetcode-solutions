/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let result = 0
    for(num1 of arr1){
        let found = false
        for(num2 of arr2){
            if(Math.abs(num1-num2) <= d){
                found = true
                break;
            }
        }
        if(!found){
            result++
        }
    }
    return result
};