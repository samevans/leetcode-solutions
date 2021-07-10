class Word{
    constructor(word = ""){
        this.word = word
        this.children = {}
        this.isWord = false
    }
}

/**
 * Initialize your data structure here.
 */
class WordDictionary {
    constructor(){
        this.root = new Word()
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root
    let letter = word.slice(0,1)
    word = word.slice(1)
    while(letter.length){
        if(!curr.children[letter]){
            curr.children[letter] = new Word(letter)
        }
        curr = curr.children[letter]
        letter = word.slice(0,1)
        word = word.slice(1)
    }
    curr.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, curr = this.root) {
    let letter = word.slice(0,1)
    word = word.slice(1)
    if(letter.length){
        if(letter === "."){
            for(let key of Object.keys(curr.children)){
                if(this.search(word, curr.children[key])){
                    return true
                }
            }
            return false
        }else{
            if(curr.children[letter]){
                return this.search(word, curr.children[letter])
            }else{
                return false
            }
        }
    } else {
        return curr.isWord
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */