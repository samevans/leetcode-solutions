/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let added = new Set()
    
    for(let i=0; i<mat.length; i++){
        sum += mat[i][i]
        added.add(i+"-"+i)
        if(!added.has(i+"-"+(mat.length-1 - i))) 
            sum += mat[i][mat.length-1 - i]
    }
    
    return sum
};