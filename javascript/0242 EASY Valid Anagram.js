/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {}
    for(let char of s){
        hash[char] = hash[char] + 1 || 1
    }
    
    for(let char of t){
        if(hash[char]){
            hash[char]--
            if(hash[char]===0) delete hash[char]
        }else{
            return false
        }
    }
    
    return Object.keys(hash).length===0
};