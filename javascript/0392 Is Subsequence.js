/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sequence = s.split("")
    
    for (character of t) {
        if(!sequence.length){
            break;
        }
        else if(character === sequence[0]){
            sequence.shift()
        }
    }
    
    return sequence.length === 0
};