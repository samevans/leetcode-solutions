/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let output = []
    
    for(let n=left; n<=right; n++) {
        
        let temp = n;
        while(1) {
            if (temp===0) {
                output.push(n)
                break;
            }
            
            let digit = temp % 10;
            if (n % digit !== 0) {
                break;
            }
            
            temp = Math.floor(temp/10)
        }
    }
    
    return output;
    
};