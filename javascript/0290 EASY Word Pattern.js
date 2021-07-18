/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    return createPattern(pattern.split("")) === createPattern(s.split(" "))
};

var createPattern = function(s){
    let seen = {}
    let i=0
    let patternString = ""
    for(let char of s){
        if(seen[char]===undefined){
            seen[char] = i
            i++
        }
        patternString += seen[char]
    }
    return patternString
}