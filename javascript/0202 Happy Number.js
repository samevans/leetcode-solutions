/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();
    
    while (n!==1) {
        if (seen.has(n)) {
            return false;
        }
        seen.add(n)

        let sum = 0;
        let temp = n;
        while(temp>0){
            sum += (temp % 10) * (temp % 10)
            temp = Math.floor(temp/10)
        }
        n = sum
    }
    return true;
};