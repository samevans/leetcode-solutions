/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let trie = new Trie();
    for(const word of words){
        trie.insert(word);
    }

    const output = [];
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            dfs(board, i, j, trie.root, output);
        }
    }
    return output
};

var dfs = function(board, row, col, root, output, word=""){
    if(root.isWord && output.indexOf(word)===-1){
        output.push(word);
    }

    if(row<0
       || col<0
       || row>=board.length
       || col>=board[0].length
       || !root.children[board[row][col]]) {
        return false;
    }

    let child = root.children[board[row][col]];
    word = word+board[row][col];

    let temp = board[row][col];
    board[row][col] = "#";

    dfs(board,row+1,col,child,output,word)
    dfs(board,row-1,col,child,output,word)
    dfs(board,row,col+1,child,output,word)
    dfs(board,row,col-1,child,output,word)

    board[row][col] = temp;
}

class Trie{
    constructor(){
        this.root = new TrieNode("");
    }
}

class TrieNode{
    constructor(word){
        this.word = word
        this.children = {};
        this.isWord = false;
    }
}

Trie.prototype.insert = function(word){
    curr = this.root;
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
