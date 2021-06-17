/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() 
        || word === word.toLowerCase()
        || word === (word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
};