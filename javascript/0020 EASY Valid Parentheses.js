/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let matching = {
       "]":"[",
       ")":"(",
       "}":"{"
    }   

    let stack = []
    for(let char of s){
       // opening paren
       if(!matching[char]){
           stack.push(char)
       } 
       // check that last opening matches current closing
       else if(matching[char] != stack.pop()) {
           return false
       }
    }
    
    return stack.length === 0
};