/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.grid = [];
    for(let i=0;i<n;i++){
        this.grid.push(new Array(n))
    }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.grid[row][col] = player;
    if(this.hasWonRow() || this.hasWonCol() || this.hasWonDiagonal()){
        return player;
    }
    return 0;
};

TicTacToe.prototype.hasWonRow = function(){
    let grid = this.grid;

    // Handle row wins
    for(let row=0;row<grid.length;row++){
        let hasWon = true;
        let val;
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col]===undefined){
                hasWon = false;
                break;
            }
            else if(!val){
                val = grid[row][col];
            }
            else if(val!==grid[row][col]){
                hasWon = false;
                break;
            }
        }
        if(hasWon){
            return true;
        }
    }
    return false;
}

TicTacToe.prototype.hasWonCol = function(){
    let grid = this.grid;

    // Handle col wins
    for(let col=0;col<grid[0].length;col++){
        let hasWon = true;
        let val;
        for(let row=0;row<grid.length;row++){
            if(grid[row][col]===undefined){
                hasWon = false;
                break;
            }
            else if(!val){
                val = grid[row][col];
            }
            else if(val!==grid[row][col]){
                hasWon = false;
                break;
            }
        }
        if(hasWon){
            return true;
        }
    }
    return false;
}

TicTacToe.prototype.hasWonDiagonal = function(){
    let grid = this.grid;

    let val;
    let hasWon = true;
    // Handle diagonal wins
    for(let i=0;i<grid.length;i++){

        if(grid[i][i]===undefined){
            hasWon = false;
            break;
        }
        if(!val){
            val = grid[i][i];
        }
        else if(val!==grid[i][i]){
            hasWon = false;
            break;
        }
    }
    if(hasWon){
        return true;
    }

    val = undefined;
    hasWon = true;
    // Handle diagonal wins
    for(let i=0;i<grid.length;i++){

        if(grid[i][grid.length-1-i]===undefined){
            hasWon = false;
            break;
        }
        if(!val){
            val = grid[i][grid.length-1-i];
        }
        else if(val!==grid[i][grid.length-1-i]){
            hasWon = false;
            break;
        }
    }
    if(hasWon){
        return true;
    }

    return false;
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
