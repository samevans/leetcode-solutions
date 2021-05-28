/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let battleships = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j]==="X"){
                dfs(board, i, j)
                battleships++
            }
        }
    }
    return battleships
};

var dfs = function(board, row, col) {
    if(row<0 || row >= board.length || col<0 || col >= board[0].length || board[row][col] !== "X") {
        return;
    }
    
    board[row][col] = '.'
    dfs(board, row+1, col)
    dfs(board, row-1, col)
    dfs(board, row, col+1)
    dfs(board, row, col-1)
}