/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let counts = {};
    
    for (let i=0; i<s.length; i++) {
        let character = s[i]
        if (!counts[character]) {
            counts[character] = 0;
        }
        counts[character]++;
    }
    
    for (let j=0; j < t.length; j++) {
        let character = t[j]
        
        if(!counts[character]){
            return character;
        }
        
        counts[character]--;
        if(counts[character]===0) {
            delete counts[character]
        }
    }
    
};