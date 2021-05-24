/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    let sum = 0;
    
    let start = 1;
    while(n > 0) {
        
        for(let day=0; day<7 && n > 0; day++) {
            sum += start+day
            n--;
        }
        start++
    }
    
    return sum;
    
};