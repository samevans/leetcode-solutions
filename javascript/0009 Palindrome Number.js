/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let xString = x.toString();
    let result = true

    if (xString.length !== 0) {
        let left = 0;
        let right = xString.length - 1;

        while(left<right) {

            if(xString[left] !== xString[right]) {
                result = false;
                break;
            }

            left+=1;
            right-=1;
        }
    }

    return result;

};
