/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dict = {}
    for(let char of magazine){
        dict[char] = dict[char] + 1 || 1
    }
    
    let canConstruct = true
    for(let char of ransomNote){
        canConstruct &= dict[char] > 0
        if(dict[char]){
            dict[char]--
        }
    }
    return canConstruct
};