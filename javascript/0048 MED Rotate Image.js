/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    // swap diagonally
    for(let i=1;i<matrix.length;i++){
        for(let j=0;j<i;j++){
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }

    // swap horizontally
    for(let row of matrix){
        let left = 0;
        let right = row.length-1;
        while(left<right){
            [row[left],row[right]] = [row[right],row[left]]
            left++;
            right--;
        }
    }

};
