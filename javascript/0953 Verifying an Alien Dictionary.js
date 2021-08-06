/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let dict = {}
    for(let i=0; i<order.length; i++){
        dict[order[i]] = i
    }
    
    for(let j=1;j<words.length;j++){
        if(!isSorted(words[j-1],words[j],dict)){
            return false
        }
    }
    return true
};

var isSorted = function(word1, word2, dict){
    let i=0;
    while(i<word1.length || i<word2.length){
        if(i>=word2.length){
            return false
        }
        else if(i>=word1.length){
            return true
        }
        else if(dict[word1[i]]<dict[word2[i]]){
            return true
        }
        else if(dict[word2[i]]<dict[word1[i]]){
            return false
        }
        i++
    }
    return true
}