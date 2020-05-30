/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let right = digits.length-1;

    digits[right] += 1;

    while(digits[right]===10){
        digits[right] = 0;

        if(right===0){
            digits.splice(0,0,0);
        } else {
            right-=1;
        }
        digits[right] +=1;
    }

    return digits;
};
