class TrieNode{
    constructor(word){
        this.word = word;
        this.children = {};
        this.isWord = false;
    }
}

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.root = new TrieNode("");
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    for(let word of dict){
        this.insert(word);
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word, count=1) {
    let curr = this.root;
    let letter = word.slice(0,1);
    word = word.slice(1);

    while(letter.length){
        if(curr.children[letter]){
            curr = curr.children[letter];
            if(word.length===0) return (curr.isWord && count===0);
            letter = word.slice(0,1);
            word = word.slice(1);
        }
        else if(count===1 && Object.keys(curr.children).length > 0){
            count = 0;
            curr = curr.children[Object.keys(curr.children)[0]]
            if(word.length===0) return (curr.isWord && count===0);
            letter = word.slice(0,1);
            word = word.slice(1);
        }else{
            return false;
        }
    }
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
MagicDictionary.prototype.insert = function(word) {
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
}
