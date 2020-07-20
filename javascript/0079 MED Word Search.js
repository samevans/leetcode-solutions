/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j]===word[0] && dfs(board, i, j, word)){
                return true;
            }
        }
    }
    return false;
};

var dfs = function(board, row, col, word, count=0){

    if(count===word.length) return true;

    if(row<0 || col<0 || row>=board.length || col>=board[0].length || board[row][col] !== word[count])     {
        return false;
    }


    let temp = board[row][col];
    board[row][col] = '';
    if(dfs(board, row+1, col, word, count+1) ||
      dfs(board, row-1, col, word, count+1) ||
      dfs(board, row, col+1, word, count+1) ||
      dfs(board, row, col-1, word, count+1)){
        return true
    }
    board[row][col] = temp;

}
