
var trieNode = function(word){
    this.word = word;
    this.children = {};
    this.isWord = false;
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new trieNode("");
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    let letter = word.slice(0,1);
    word = word.slice(1);

    while(letter.length){
        if(!curr.children[letter]){
            curr.children[letter] = new trieNode(letter);
        }
        curr = curr.children[letter];
        if(word.length===0){
            curr.isWord = true;
        }
        letter = word.slice(0,1);
        word = word.slice(1);
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, exists=false) {
    let curr = this.root;
    let letter = word.slice(0,1);
    word = word.slice(1);
    while(letter.length){
        if(curr.children[letter]){
            curr = curr.children[letter];
            if(word.length===0) return exists ? true : curr.isWord;
            letter = word.slice(0,1);
            word = word.slice(1);
        }else{
            return false;
        }
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
