/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let matching = {
        "}":"{",
        ")":"(",
        "]":"["
    };

    let stack = [];

    for(var i=0; i<s.length; i++){
        let paren = s[i]
        
        if(!(matching[paren])) {
            stack.push(paren);
        }
        else if(matching[paren] !== stack.pop()) {
            return false;
        }
    }
    
    return stack.length === 0;
    
};