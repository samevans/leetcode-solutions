/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let row = 0; row<board.length; row++){
        if(!validRow(board[row])){
            return false
        }
    }
    
    for(let col=0; col<board[0].length; col++){
        let colRow = []
        for(let row=0; row<board.length; row++){
            colRow.push(board[row][col])
        }
        if(!validRow(colRow)){
            return false
        }
    }
    
    for(let row=0; row<board.length; row+=3){
        for(let col=0; col<board.length; col+=3){
            let square = []
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                    square.push(board[row+i][col+j])
                }
            }
            if(!validRow(square)){
                return false
            }
        }
    }
    
    return true
};

var validRow = function(row) {
    let set = new Set()
    
    for(let val of row){
        if(set.has(val) && val !== "."){
            return false
        }
        set.add(val)
    }
    
    return true;
}