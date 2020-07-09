/**
 * Initialize your data structure here.
 */
class TrieNode{
    constructor(word){
        this.word=word;
        this.isWord=false;
        this.children={};
    }
}

var WordDictionary = function() {
    this.root = new TrieNode('');
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    let letter = word.slice(0,1);
    word = word.slice(1);

    while(letter.length){
        if(!curr.children[letter]){
            curr.children[letter] = new TrieNode(letter);
        }
        curr = curr.children[letter];
        if(word.length===0) curr.isWord = true;
        letter = word.slice(0,1);
        word = word.slice(1);
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, curr=this.root) {

    for(let i=0;i<word.length;i++){
        let char = word[i];
        if(char !== '.'){
            if(!curr.children[char]) return false;
            curr = curr.children[char];
        }else{
            for(child of Object.keys(curr.children)){
                if(this.search(child+word.slice(i+1),curr)){
                    return true;
                }
            }
        }

        if(i===word.length-1) return curr.isWord;
    }

    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
