/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let currString = ""
    let currNum = 0
    let stack = []
    
    for(let char of s){
        
        if(char==="[") {
            stack.push(currString)
            stack.push(currNum)
            currString = ""
            currNum = 0
        }
        
        else if(char==="]"){
            let prevNum = stack.pop()
            let prevString = stack.pop()
            currString = prevString + currString.repeat(prevNum)
            currNum = 0
        }
        
        else if(!isNaN(parseInt(char))){
            currNum = currNum * 10 + parseInt(char)
        }
        
        else{
            currString += char
        }
        
    }
    
    return currString
};