/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let m = 1;
    
    while (1) {
        let mid = Math.floor((n+m)/2)
        let result = guess(mid);
        
        if (result === -1) {
            n = mid-1;
        }
        else if (result === 1) {
            m = mid+1;
        }
        else {
            return mid;
        }
    }
};