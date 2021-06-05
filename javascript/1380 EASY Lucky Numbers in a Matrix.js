/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let output = []
    for (let row = 0; row < matrix.length; row++) {
        let min = [Infinity, 0]
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] < min[0]){
                min = [matrix[row][col], col]
            }
        }
        if(isLucky(matrix, row, min[1])) {
            output.push(matrix[row][min[1]])
        }
    }
    return output
};

var isLucky = function(matrix, row, col) {
    let value = matrix[row][col]
    
    for(let i = row-1; i>=0; i--){
        if(matrix[i][col] > value) {
            return false;
        }
    }
    
    for(let j = row+1; j < matrix.length; j++) {
        if(matrix[j][col] > value) {
            return false;
        }
    }
    
    return true
}