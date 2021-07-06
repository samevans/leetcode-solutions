/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    for(let i=0; i<10; i++) {
        let mid = Math.floor(wordlist.length/2)
        
        let matches = master.guess(wordlist[mid])
        if (matches === 6) return
        
        let candidates = []
        for(let word of wordlist){
            if(matches === getMatches(word, wordlist[mid])){
                candidates.push(word)
            }
        }
        wordlist = candidates
    }
};

var getMatches = function(firstWord, secondWord){
    let matches = 0;
    for(let i=0; i<6; i++) {
        if(firstWord[i] === secondWord[i]) matches++
    }
    return matches
}