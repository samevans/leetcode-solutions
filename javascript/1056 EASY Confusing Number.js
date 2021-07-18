/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    let s = n.toString().split("")
    
    // Flip
    let flipDict = {
        "0":"0",
        "1":"1",
        "6":"9",
        "8":"8",
        "9":"6"
    }
    
    for(let i=0;i<s.length; i++){
        let char = s[i]
        if(flipDict[char]){
            s[i] = flipDict[char]
        }else{
            return false
        }
    }
    
    // Reverse
    let left = 0
    let right = s.length-1
    while(left<right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
    
    // Remove leading zeros
    while(s[0]==="0"){
        s.shift()
    }
    if(!s.length) return false
    
    return parseInt(s.join("")) !== n
};