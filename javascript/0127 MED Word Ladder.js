/**
 * DOESNT WORK
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let trie = new Trie();
    for(const word of wordList){
        trie.insert(word);
    }
    trie.insert(beginWord)

    let result = [Infinity];
    return solver(result, trie, beginWord, endWord);
    return result[0] === Infinity ? 0 : result[0];
};

var solver = function(result, trie, beginWord, endWord, times=0, visited = new Set()){

    console.log(beginWord)
    if(beginWord===endWord){
        result[0] = Math.min(times,result[0])
        return;
    }
    else if(!trie.search(beginWord)){
        return;
    }

    for(let i=0; i<endWord.length; i++){
        const newWord = beginWord.slice(0,i) + endWord[i] + beginWord.slice(i+1);
        solver(result, trie, newWord, endWord, times+1, visited);
        visited.add(newWord);
    }
}

class TrieNode{
    constructor(letter){
        this.letter = letter;
        this.isWord = false;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode("");
    }
    insert(word){
        let curr = this.root;
        let letter = word.slice(0,1);
        word = word.slice(1);
        while(letter.length){
            if(!curr.children[letter]){
                curr.children[letter] = new TrieNode(letter);
            }
            curr = curr.children[letter];
            if(!word.length) curr.isWord = true;
            letter = word.slice(0,1);
            word = word.slice(1);
        }
    }
    search(word){
        let curr = this.root;
        let letter = word.slice(0,1);
        word = word.slice(1);
        while(letter.length){
            if(curr.children[letter]){
                curr = curr.children[letter];
                if(!word.length) return curr.isWord;
                letter = word.slice(0,1);
                word = word.slice(1);
            }else{
                return false;
            }
        }
    }
}
