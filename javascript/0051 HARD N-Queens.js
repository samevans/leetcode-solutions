/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    
    let grid = []
    
    for(let row = 0; row < n; row++){
        let s = ""
        for(let col = 0; col < n; col++){
            s+="."
        }
        grid.push(s)
    }
    
    calculateQueens(result, n, grid)
    
    return result
};

var calculateQueens = function(result, n, grid, queens = 0, row = 0, col = 0) {
    if(queens === n){
        result.push(grid)
        return
    }
    
    for(let i=row; i<n; i++){
        for(let j=col; j<n; j++){
            if(validQueen(grid, i, j)){
                let tempGrid = [...grid]
                let newRow = tempGrid[i].split("")
                newRow[j] = "Q"
                tempGrid[i] = newRow.join("")
                calculateQueens(result, n, tempGrid, queens+1, i+1)
            }
        }
    }
}

var validQueen = function(grid, row, col){
    
    // vertically no other queens
    for(let i=0; i<row; i++){
        
        if(grid[i][col] === "Q"){
            return false
        }
    }
    
    // horizontally no other queens
    for(let i=0; i<col; i++){
        if(grid[row][i] === "Q"){
            return false
        }
    }
    
    // upper left diagonally no other queens
    for(let i=1; row-i>=0 && col-i>=0; i++){
        if(grid[row-i][col-i] === "Q") {
            return false
        }
    }
    
    // upper right diagonally no other queens
    for(let i=1; row-i>=0 && col+i<grid[0].length; i++){
        if(grid[row-i][col+i] === "Q") {
            return false
        }
    }
    
    return true
}