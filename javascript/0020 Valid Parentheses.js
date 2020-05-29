/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parenDict = {
        "}":"{",
        ")":"(",
        "]":"["
    };

    let stack = [];

    for(var i=0;i<s.length;i++){
        if(!(parenDict[s[i]])) {
            stack.push(s[i]);
        }
        else if(parenDict[s[i]] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};
