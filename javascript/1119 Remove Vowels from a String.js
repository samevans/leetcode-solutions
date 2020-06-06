/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    let vowels = {
        "a":1,
        "e":2,
        "i":3,
        "o":4,
        "u":5
    }

    let result = "";

    for(let i=0; i<S.length; i++) {
        if(!vowels[S[i]]){
            result+=S[i];
        }
    }

    return result;
};
