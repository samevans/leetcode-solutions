/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solver(board);
};


var solver = function(board) {
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(board[i][j]==="."){
                for(var test=1;test<10;test++){
                    if(isValid(board, i, j, test)){
                        board[i][j] = test.toString();
                        if(solver(board)){
                            return true;
                        }else{
                            board[i][j] = "."
                        }

                    }
                }
                return false;
            }
        }
    }

    return true;
}

var isValid = function(board, row, col, test) {

    // Cant be in same row
    for(var i=0;i<9;i++){
        if(board[row][i] === test.toString()){
            return false;
        }
    }

    // Cant be in same col
    for(var i=0;i<9;i++){
        if(board[i][col] === test.toString()){
            return false;
        }
    }

    // Cant be in same sub box
    let subx=0, suby=0;
    if(col>=3) subx = col<6 ? 3 : 6;
    if(row>=3) suby = row<6 ? 3 : 6;

    for(var i=suby;i<suby+3;i++){
        for(var j=subx;j<subx+3;j++){

            if(board[i][j] === test.toString()){
                return false;
            }

        }
    }

    return true;
}
