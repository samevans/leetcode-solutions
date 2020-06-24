/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    if(!board || board.length===0) return [];

    const visited = {};

    let rows = [0,board.length-1];
    let cols = [0,board[0].length-1];

    for(row of rows){
        for(var col=0;col<board[0].length;col++){
            if(board[row][col]==="O" && !visited[row+'-'+col]){
                flip(board, visited, Object.freeze([row,col]));
            }
        }
    }

    for(col of cols){
        for(var row=0;row<board.length;row++){
            if(board[row][col]==="O" && !visited[row+'-'+col]){
                flip(board, visited, Object.freeze([row,col]));
            }
        }
    }

    for(var r=0;r<board.length;r++){
        for(var c=0;c<board[0].length;c++){
            if(board[r][c]==="Q") board[r][c]="O";
            else if(board[r][c]==="O") board[r][c]="X";
        }
    }
};

var flip = function(board, visited, cell) {

    let stack = [cell];

    while(stack.length>0){
        let curr = stack.pop();
        let row=curr[0], col=curr[1];


        if(visited[row+'-'+col]) continue;

        visited[row+'-'+col] = 1;
        board[row][col]="Q";

        if(isValid(board, row+1, col)){
            stack.push(Object.freeze([row+1,col]));
        }
        if(isValid(board, row-1, col)){
            stack.push(Object.freeze([row-1,col]));
        }
        if(isValid(board, row, col+1)){
            stack.push(Object.freeze([row,col+1]));
        }
        if(isValid(board, row, col-1)){
            stack.push(Object.freeze([row,col-1]));
        }
    }
}

var isValid = function(board, row, col){
    if(row<0 || col<0){
        return false;
    }
    else if(row>=board.length || col>=board[0].length){
        return false;
    }
    else if(board[row][col]==="X"){
        return false;
    }
    return true
}
