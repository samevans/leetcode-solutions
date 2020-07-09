/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {

    let trie = new Trie();
    for(let word of words){
        trie.insert(word);
    }

    let best = undefined;
    for(let word of words){
        if(best && word.length<best.length) continue;
        let curr = trie.root;
        let isWord = true;
        for(let c of word){
            if(curr.children[c] && curr.children[c].isWord){
                curr = curr.children[c]
            }else{
                isWord = false;
                break;
            }
        }
        if(isWord){
            if(best===undefined || word.length>best.length){
                best = word;
            }
            else if(word.length===best.length){
                best = word.localeCompare(best)===-1? word : best;
            }
        }
    }
    return best;
};

class Trie {
    constructor(){
        this.root = new TrieNode('');
    }
}

Trie.prototype.insert = function(word){
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

class TrieNode {
    constructor(word){
        this.word = word;
        this.children = {};
        this.isWord = false;
    }
}
