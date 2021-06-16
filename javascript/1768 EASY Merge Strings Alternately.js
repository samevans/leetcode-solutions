/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1count = 0
    let word2count = 0
    
    let result = ""
    
    while(word1count<word1.length || word2count<word2.length){
        if(word1count<word1.length){
            result += word1[word1count]
            word1count++
        }
        if(word2count<word2.length){
            result += word2[word2count]
            word2count++
        }
    }
    
    return result
};